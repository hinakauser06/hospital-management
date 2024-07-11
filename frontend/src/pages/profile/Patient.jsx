import { useEffect, useState } from "react"
import Headerbar from "../../Components/Headerbar"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import TimeDate from "../../Components/TimeDate"

function Patient(props) {
    const [data, setData] = useState({})
    const navigate = useNavigate();
    const [appointmentList, setappointmentList] = useState([])
    const apiCall = async () => {
        const response = await axios.get("http://localhost:5000/appointment")
        setappointmentList(response)
        console.log(response)
    }
    // console.log(appointmentList.data.doctorId)
    useEffect(() => {
        const isLogged = localStorage.getItem("loggedin")
        if (isLogged) {
            let userdata = localStorage.getItem("data")
            console.log(userdata)
            userdata = JSON.parse(userdata)
            // console.log(userdata)
            setData(userdata)
            apiCall()


        }
        else {

            navigate("/login")
        }
        return () => { }
    }, [])
    return (
        <>
            <Headerbar />
            <body className="container ">
                <h3 style={{ textAlign: "center" }} >
                    <i className="bi bi-person"></i>  Welcome Back! {data.name}
                </h3>
                <div className="row">
                    <div className="col-8">
                        <div className="row mx-2 p-1" >
                            <div className="col-2" >
                                <label for="name" className="col-form-label">Name:  </label>
                            </div>
                            <div className="col-3 pt-2" >
                                {data.name}
                            </div>
                        </div>

                        <div className="row mx-2 p-1">
                            <div className="col-2">
                                <label for="email" className="col-form-label"> Email: </label>
                            </div>
                            <div className="col-3 pt-2">
                                {data.email}
                            </div>
                        </div>

                        <div className="row mx-2 p-1">
                            <div className="col-2">
                                <label for="address" className="col-form-label">Address: </label>
                            </div>
                            <div className="col-3 pt-2">
                                {data.address}
                            </div>
                        </div>
                        <div className="row mx-2 p-1">
                            <div className="col-1">
                                <label for="phone" className="col-form-label">Phone: </label>
                            </div>
                            <div className="col-3">
                                {data.phone}
                            </div>
                        </div>
                        <div className='row mx-2 p-1 '>
                            <label className="form-label col-2">Gender: </label>
                            <div className="form-check col-1 ms-2">
                                {data.gender}
                            </div>
                        </div>
                        <div className="row mx-2 p-1">
                            <div className="col-2">
                                <label for="age" className="col-form-label">Age: </label>
                            </div>
                            <div className="col-3 pt-2">
                                {data.age}
                            </div>
                        </div>
                        <div className="row" >
                            <div className="col-4">
                                <button className="btn btn-primary btn-lg " onClick={() => navigate("/appointment/create")}>
                                    Book Appoinment
                                </button>
                            </div>
                            <div className="col-4">
                                <p class="d-inline-flex gap-1">
                                    <button class="btn btn-primary btn-lg" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                        Appointment History
                                    </button>
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="col-4">
                        <img src="/img/patientprofile.avif" alt="profile" id="profile" />
                    </div>
                </div>
                {/* <TimeDate/> */}
                <div className="row">
                    <div className=" col-12" >
                        <div class="collapse " id="collapseExample">
                            <div class="card card-body">
                                <div className="container">
                                    <div className="row" >
                                        {
                                            appointmentList && appointmentList.data && appointmentList.data.length > 0 && appointmentList.data.map((e) => (
                                                <>
                                                    <div className=" col-sm-4">
                                                        <div class="card border-success mb-3 " style={{ width: "20rem", Height: "40rem" }}>
                                                            <div class="card-header bg-transparent border-success"> {e.isAssigned ? <><b> Your Appointment has been Booked</b></> : <><b className="textColor">Not assigned yet </b></>}</div>
                                                            <div class="card-body text-success">
                                                                <h5 class="card-title"> </h5>
                                                                <p class="card-text">{e.problem}</p>
                                                                {/* <p class="card-text">{e.dept}</p> */}
                                                            </div>
                                                            {e.isAssigned && 
                                                            <>
                                                                {/* <div class="card-footer bg-transparent border-success" key={e.doctorId.name}>Dr. {e.isAssigned && e.doctorId.name} is assigned </div> */}
                                                                <div class="card-footer bg-transparent border-success">{e.isAssigned && e.dept} </div>
                                                            </>
                                                            }
                                                        </div>
                                                    </div>
                                                </>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </>
    )
}
export default Patient