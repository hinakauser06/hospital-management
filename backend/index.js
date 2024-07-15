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

const DoctorModel = mongoose.model('doctor', { name: String, email: String, password: String, dept: String, phone: String, });
// getting all doctor list get request
app.get('/doctor', cors(), async (req, res) => {

    // for filter
    const dept = req.query.dept
    try {

        const doctor = await DoctorModel.find(dept ? { dept } : {})
        res.json(doctor)
    }
    catch (err) {
        res.status(5000).json({ message: err.message })
    }

})

app.post('/doctor', cors(), async (req, res) => {

    console.log("request", req.body);
    const { name, email, password, dept, phone } = req.body;
    const doctorObj = new DoctorModel({
        name: name, email: email, password: password, dept: dept, phone: phone
    })
    const result = await doctorObj.save()
    res.json(result)

})


const PatientModel = mongoose.model('patient', { name: String, email: String, password: String, problem: String, experience: Number, gender: String, age: Number });

app.get('/patient', cors(), async (req, res) => {
    const data = await PatientModel.find()
    console.log(data)
    res.json(data)
})

app.post('/patient', cors(), async (req, res) => {
    console.log("request", req.body);
    const { name, email, password, problem, experience, gender, age } = req.body;
    const patientObj = new PatientModel({
        name: name, email: email, password: password, problem: problem, experience: experience, gender: gender, age: age
    })
    const result = await patientObj.save()
    console.log(result)
    res.json(result)
})

// for appointment
const AppointmentModel = mongoose.model('appointment', { dept: String, problem: String, patientId: { type: mongoose.Schema.Types.ObjectId, ref: "patient" }, doctorId: { type: mongoose.Schema.Types.ObjectId, ref: "doctor" }, isAssigned: Boolean })
app.post('/appointment', cors(), async (req, res) => {
    const { dept, problem, patientId } = req.body;
    const appointmentObj = new AppointmentModel({ dept: dept, problem: problem, patientId: patientId, isAssigned: false })
    const result = await appointmentObj.save()
    res.json(result)
})
// for getting appointment list on front end on admin profile

app.get('/appointment', cors(), async (req, res) => {
    try {
        const appointments = await AppointmentModel.find().populate("patientId").populate("doctorId")
        res.json(appointments)
    }
    catch (error) {
        console.error('Eror fetching appointments: ', error)
        res.status(500).send('server error')
    }
})

// for assignedPatient

app.get('/appointment/doctorId', cors(), async (req, res) => {
    const doctorId = req.params.doctorId
    try {
        const filter = {}

        if (req.query.doctorId) {
            filter.doctorId = req.query.doctorId
        }
        const data = await AppointmentModel.find(filter).populate("patientId")
        res.json(data)
    }
    catch (err) {
        res.status(5000).json({ message: err.message })
    }
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
// admin/doctor
app.patch('/admin/doctor-assign', cors(), async (req, res) => {
    const { appointmentId, doctorId } = req.body
    const appointment = await AppointmentModel.findOne({ _id: appointmentId })
    if (appointment) {
        appointment.doctorId = doctorId
        appointment.isAssigned = true
        appointment.save()
    }
    res.json(appointment)
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





