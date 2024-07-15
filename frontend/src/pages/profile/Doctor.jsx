import { useEffect, useState } from "react"
import Headerbar from "../../Components/Headerbar"
import { redirect, useNavigate, useParams } from "react-router-dom"
import axios from "axios"

function Doctor(props) {
    const [data, setData] = useState({})
    const navigate = useNavigate();
    // for appointment list
    const [appointmentResponse, setappointmentResponse] = useState([])
    const apiCall = async () => {
        const response = await axios.get('http://localhost:5000/appointment')
        setappointmentResponse(response.data)
    }
    console.log(appointmentResponse)
    useEffect(() => {
        const isLogged = localStorage.getItem("loggedin")
        if (isLogged) {
            let userdata = localStorage.getItem("data")
            console.log(userdata)
            userdata = JSON.parse(userdata)
            setData(userdata)
            apiCall()
        }
        else {
            navigate("/login")
        }
    }, [])

    return (
        <>
            <Headerbar />
            <body className="container ">
                <div className="row ">
                    <h3 style={{ textAlign: "center" }} >
                        <i className="bi bi-person"></i>  Welcome Back! Dr. {data.name}
                    </h3>
                    <div className="col-8 p-3" >
                        <div className="row mx-2 p-1">
                            <div className="col-3">
                                <label for="email" className="col-form-label">Email: </label>
                            </div>
                            <div className="col-3">
                                {data.email}
                            </div>
                        </div>
                        <div className="row mx-2 p-1">
                            <div className="col-3">
                                <label for="dept" className="col-form-label">Dept: </label>
                            </div>
                            <div className="col-3 text-uppercase">
                                {data.dept}
                            </div>
                        </div>
                        <div className="row mx-2 p-1">
                            <div className="col-3">
                                <label for="phone" className="col-form-label">Phone: </label>
                            </div>
                            <div className="col-3">
                                {data.phone}
                            </div>
                        </div>
                        <div className="row mx-2 p-1" >
                            <div className="col-3">
                                <label for="name" className="col-form-label">Working Hrs:  </label>
                            </div>
                            <div className="col-3">
                                9 AM to 6 PM
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8  p-4" >
                                <p class="d-inline-flex gap-1">
                                    <button class="btn btn-outline-primary" type="button" data-bs-toggle="collapse" data-bs-target="#patientappointed" aria-expanded="false" aria-controls="collapseExample">
                                        Patient Appointed
                                    </button>
                                    <button class="btn btn btn-outline-primary" type="button" data-bs-toggle="collapse" data-bs-target="#meeting" aria-expanded="false" aria-controls="collapseExample">
                                        Meeting
                                    </button>
                                    <button class="btn btn btn-outline-primary" type="button" data-bs-toggle="collapse" data-bs-target="#event" aria-expanded="false" aria-controls="collapseExample">
                                        Event
                                    </button>
                                    <button class="btn btn-outline-danger" type="button" data-bs-toggle="collapse" data-bs-target="#emergency" aria-expanded="false" aria-controls="collapseExample">
                                        Emergency
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <img src="/img/doctor1.jpg" alt="profile" id="profile" style={{ height: '300px', width: '350px' }} />
                    </div>
                </div>
                {/* for appointed patient list */}
                <div className="row">
                    <div className="col-12">
                        <div class="collapse" id="patientappointed">
                            <div class="card card-body" >
                                <div className="container" >
                                    <div className="row" >
                                        {appointmentResponse && appointmentResponse.length > 0 && appointmentResponse.map((e) => (
                                            (e.doctorId) && (e.doctorId.name === data.name) && (
                                                <>
                                                    <div class="card" key={e.patientId.name} style={{ width: "22rem", margin: "4px" }}>
                                                        <ul class="list-group list-group-flush">
                                                            <li class="list-group-item"> Patient Name:   {e.patientId.name}</li>
                                                            <li class="list-group-item" >Problem: {e.problem}</li>
                                                            <li class="list-group-item">Gender: {e.patientId.gender}</li>
                                                            <li class="list-group-item">Age: {e.patientId.age}</li>
                                                        </ul>
                                                    </div>
                                                </>
                                            )
                                        ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="collapse" id="meeting">
                            <div class="card card-body">
                                There's no any meeting for today.
                            </div>
                        </div>
                        <div class="collapse" id="event">
                            <div class="card card-body">
                                No any event has been schedule for this week
                            </div>
                        </div>
                        <div class="collapse" id="emergency">
                            <div class="card card-body">
                                No emergency till now
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}
export default Doctor