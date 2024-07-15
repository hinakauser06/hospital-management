import { useEffect, useState } from "react"
import Headerbar from "../../Components/Headerbar"
import { redirect, useNavigate } from "react-router-dom"

function Admin(props) {
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
        return navigate("/doctor/list")
    }

    return (
        <>
            <Headerbar />
            <body className="container ">
                <div className="row">
                    <h3 style={{ textAlign: "center" }} >
                        <i className="bi bi-person"></i>  Welcome Back! {data.name}
                    </h3>
                    <div className="col-8 p-3" >
                        <div className="row mx-2 p-1 ">
                            <div className="col-3">
                                <label for="email" className="col-form-label">Email: </label>
                            </div>
                            <div className="col-3">
                                {data.email}
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
                            <div className="col-12 p-4">
                                <button type="button" class="btn btn-outline-primary m-2" onClick={() => navigate("/doctor/list")}>Doctor List</button>
                                <button type="button" class="btn btn-outline-primary m-2" onClick={() => navigate("/patient/list")}>Patient List</button>
                                <button type="button" class="btn btn-outline-primary m-2" onClick={() => navigate("/appointment/list")}>Appointment Resquest</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <img src="/img/adminprofile.webp" alt="profile" id="profile" />
                    </div>
                </div>
            </body>
        </>
    )
}
export default Admin