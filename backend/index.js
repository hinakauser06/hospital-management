const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/hospital');

app.use(cors())

const whitelist = ['http://localhost:3000']
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}


app.get('/', (req, res) => {
    console.log("asbdajsdba");
    const name = "hsudgsj";
    res.send(name)

})

const DoctorModel = mongoose.model('doctor', { name: String,email:String, password:String, experience: String, gender: String, phone: String, password: String, speciality: String });
// getting all doctor list get request
app.get('/doctor', cors(), async (req, res) => {
    const data = await DoctorModel.find()
    console.log(data)
    res.json(data)
})

app.post('/doctor', cors(), async (req, res) => {
    console.log("request", req.body);
    const { name, password, email, speciality, experience, gender, phone } = req.body;
    const doctorObj = new DoctorModel({
        name: name, password: password,email: email, speciality: speciality, experience: experience, gender: gender, phone: phone
    })
    const result = await doctorObj.save()
    // console.log(result)
    res.json(result)

})

// for patient

const PatientModel = mongoose.model('patient', { name: String, email: String,password:String, problem: String, experience: Number, gender: String, age: Number });

app.get('/patient', cors(), async (req, res) => {
    const data = await PatientModel.find()
    console.log(data)
    res.json(data)
})

app.post('/patient', cors(), async (req, res) => {
    console.log("request", req.body);
    const { name, problem, experience, gender, age, email, password } = req.body;
    const patientObj = new PatientModel({
        name: name, problem: problem, experience: experience,password:password, gender: gender, age: age, email: email
    })
    const result = await patientObj.save()
    console.log(result)
    res.json(result)
})

// for admin
const AdminModel = mongoose.model('admin', { name: String, email: String, password: String, });

app.get('/admin', cors(), async (req, res) => {
    const data = await AdminModel.find()
    console.log(data)
    res.json(data)
})

app.post('/admin', cors(), async (req, res) => {
    console.log("request", req.body);
    const { name, email, password } = req.body;
    const adminObj = new AdminModel({
        name: name, email: email, password: password
    })
    const result = await adminObj.save()
    console.log(result)
    res.json(result)
})


app.post('/login', cors(), async (req, res) => {
    // console.log("request", req.body);
    let msg = ""
    let data = {}
    const { usertype, email, password } = req.body
    console.log(req.body)
    if (usertype === 'admin') {
        const response = await AdminModel.find({ email: email })
        console.log(response)
        if (response && response[0]) {
            if (response[0].password === password) {
                msg = "logged in successful"
                data = response[0]
            }
            else {
                msg = "password not matched"
            }
        }
        else {
            msg = "user email not found"
        }
    }
    else if (usertype === 'patient') {
        const response = await PatientModel.find({ email: email })
        console.log(response)
        if (response && response[0]) {
            if (response[0].password === password) {
                msg = "logged in successful"
                data = response[0]
            }
            else {
                msg = "password not matched"
            }
        }
        else {
            msg = "user email not found"
        }
    }
    else if (usertype === 'doctor') {
        const response = await DoctorModel.find({ email: email })
        console.log(response)
        if (response && response[0]) {
            if (response[0].password === password) {
                msg = "logged in successful"
                data = response[0]
            }
            else {
                msg = "password not matched"
            }
        }
        else {
            msg = "user email not found"
        }
    }


    res.json({ message: msg, data: data })
})
















// this should be always in last

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})





