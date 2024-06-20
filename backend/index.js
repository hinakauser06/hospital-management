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

const DoctorModel = mongoose.model('doctor', { name: String, experience: String, gender: String, phone: String, password: String, speciality: String });
// getting all doctor list get request
app.get('/doctor', cors(), async (req, res) => {
    const data = await DoctorModel.find()
    console.log(data)
    res.json(data)
})

app.post('/doctor', cors(),async (req, res) => {
    console.log("request", req.body);
    const {name, password, speciality, experience, gender,phone} = req.body;
    const doctorObj = new DoctorModel({
        name:name, password:password, speciality:speciality, experience:experience, gender:gender, phone: phone 
    })
    const result = await doctorObj.save()
    // console.log(result)
    res.json(result)

})

// for patient

const PatientModel = mongoose.model('patient', { name: String, problem: String, experience: Number, gender: String, age: Number });

app.get('/patient', cors(), async (req, res) => {
    const data = await PatientModel.find()
    console.log(data)
    res.json(data)
})

app.post('/patient', cors(), async (req, res) => {
    console.log("request", req.body);
    const{name, problem, experience, gender, age} = req.body;
    const patientObj = new PatientModel({
        name: name, problem:problem, experience:experience, gender:gender, age:age
    })
    const result = await patientObj.save()
    console.log(result)
    res.json(result)
})

// for admin
const AdminModel = mongoose.model('admin', { name: String, gender: String, dept: String, password: String, age: Number, experience: String });

app.get('/admin', cors(), async (req, res) => {
    const data = await AdminModel.find()
    console.log(data)
    res.json(data)
})

app.post('/admin', cors(), async(req, res) => {
    console.log("request", req.body);
    const{name, dept, experience, gender, age, password} = req.body;
    const adminObj = new AdminModel({
        name: name, dept: dept, experience: experience, gender: gender, age: age, password: password
    })
    const result = await adminObj.save()
    console.log(result)
    res.json(result)
})






app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})





