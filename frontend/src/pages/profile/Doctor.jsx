import { useEffect, useState } from "react"
import Headerbar from "../../Components/Headerbar"
import { redirect, useNavigate, useParams } from "react-router-dom"
import axios from "axios"

function Doctor(props) {
    const [data, setData] = useState({})
    const navigate = useNavigate();
    useEffect(() => {
        const isLogged = localStorage.getItem("loggedin")
        if (isLogged) {
            let userdata = localStorage.getItem("data")
            console.log(userdata)
            userdata = JSON.parse(userdata)
            setData(userdata)
        }
        else {
            navigate("/login")
        }

    }, [])
    const redirect = () => {
        return navigate("/doctor/AssignedPatient")
    }
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
                                <button type="button" class="btn btn-outline-success m-1"  >Appointment List</button>
                                <button type="button" class="btn btn-outline-success m-1">Meeting</button>
                                <button type="button" class="btn btn-outline-success m-1">Event</button>
                                <button type="button" class="btn btn-outline-success m-1">Emergency</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <img src="/img/doctor1.jpg" alt="profile" id="profile" />
                    </div>
                </div>
            </body>
        </>
    )
}
export default Doctor