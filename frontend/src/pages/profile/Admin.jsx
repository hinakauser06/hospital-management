import { useEffect, useState } from "react"
import Headerbar from "../../Components/Headerbar"
import { redirect, useNavigate } from "react-router-dom"

function Admin(props) {
    const [data, setData] = useState({})
    const navigate = useNavigate();
    // for getting doctor list
function DoctorList(){

}
// end of function
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


            <body className="container body">
                <div className="row">
                    <div className="col-9 " >
                        <h3 style={{ textAlign: "center" }} >
                            <i className="bi bi-person"></i>  Welcome Back! {data.name}</h3>
                        <div className="row mx-2 p-2">
                            <div className="col-2">
                                <label for="name" className="col-form-label">Admin Name:  </label>
                            </div>
                            <div className="col-3">
                                {data.name}
                            </div>
                        </div>

                        <div className="row mx-2 p-1">
                            <div className="col-2">
                                <label for="email" className="col-form-label">Admin Email: </label>
                            </div>
                            <div className="col-3">
                                {data.email}
                            </div>
                        </div>

                        <div className="row mx-2 p-1">
                            <div className="col-2">
                                <label for="phone" className="col-form-label">Admin Phone: </label>
                            </div>
                            <div className="col-3">
                                {data.phone}
                            </div>
                        </div>

                    </div>
                    <div className="col-3">
                    <button type="button" class="btn btn-outline-success m-2" onClick={()=>navigate("/doctor/list")}>Doctor List</button>
                    <button type="button" class="btn btn-outline-success m-2" onClick={()=>navigate("/patient/list")}>Patient List</button>
                    <button type="button" class="btn btn-outline-success m-2" onClick={()=>navigate("/appointment/list")}>Appointment Resquest</button>
                    <button type="button" class="btn btn-outline-success m-2" onClick={()=>navigate("/appointment/appointmentSchedule")}>Appointment Status</button>
                    </div>

                </div>



            </body>
        </>
    )
}
export default Admin