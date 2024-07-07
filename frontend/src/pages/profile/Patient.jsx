import { useEffect, useState } from "react"
import Headerbar from "../../Components/Headerbar"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Patient(props) {
    const [data, setData] = useState({})
    const navigate = useNavigate();
    const [appointmentList, setappointmentList] = useState([])
    const apiCall = async () => {
        const response = await axios.get("http://localhost:5000/appointment")
        setappointmentList(response)
        console.log(response)
    }


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

            <body className="container body">
                {/* {JSON.stringify(data)}
            <h3>{data.name}</h3> */}


                <h3 style={{ textAlign: "center" }} >
                    <i className="bi bi-person"></i>  Welcome Back! {data.name}</h3>
                <div className="row mx-2 p-1">
                    <div className="col-2">
                        <label for="name" className="col-form-label">Patient Name:  </label>
                    </div>
                    <div className="col-3">
                        {data.name}
                    </div>
                </div>

                <div className="row mx-2 p-1">
                    <div className="col-2">
                        <label for="email" className="col-form-label">Patient Email: </label>
                    </div>
                    <div className="col-3">
                        {data.email}
                    </div>
                </div>



                <div className="row mx-2 p-1">
                    <div className="col-2">
                        <label for="health issues" className="col-form-label">Health Issues: </label>
                    </div>
                    <div className="col-3">
                        {data.problem}
                    </div>
                </div>
                <div className="row mx-2 p-1">
                    <div className="col-2">
                        <label for="address" className="col-form-label">Address: </label>
                    </div>
                    <div className="col-3">
                        {data.address}
                    </div>
                </div>
                <div className="row mx-2 p-1">
                    <div className="col-2">
                        <label for="phone" className="col-form-label">Phone: </label>
                    </div>
                    <div className="col-3">
                        {data.phone}
                    </div>
                </div>
                <div className='row mx-2 p-1 '>
                    <label className="form-label col-1">Gender</label>
                    <div className="form-check col-1 ms-2">
                        {data.gender}
                    </div>
                </div>
                <div className="row mx-2 p-1">
                    <div className="col-1">
                        <label for="age" className="col-form-label">Age: </label>
                    </div>
                    <div className="col-3">
                        {data.age}
                    </div>
                </div>
                <button className="btn btn-success btn-lg" onClick={() => navigate("/appointment/create")}>Book Appoinment</button>
                {appointmentList && appointmentList.data && appointmentList.data.length>0 && appointmentList.data.map((e) => (
                    <div style={{border: '2px solid black'}} >
                        <h5>{e.dept} </h5>
                        <h5>{e.problem} </h5>
                        <h5>{e.isAssigned? "Yes" : "No"}  </h5>
                        <h5>{e.isAssigned && e.doctorId.name }  </h5>
                    </div>
                ))}
                <div className="container"></div>
            </body>
        </>
    )
}
export default Patient