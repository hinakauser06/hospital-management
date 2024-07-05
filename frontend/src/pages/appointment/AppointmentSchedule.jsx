import { useState } from "react";
import Headerbar from "../../Components/Headerbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function AppointmentSchedule(props) {
    const navigate = useNavigate()
    const [assigned, setAssigned] = useState("")
    
 const appointmentStatus =  () =>{
    apiCall()
    setAssigned('')
 }
 const apiCall = ()=> {
    const response =  axios.get('http://localhost:5000/appointment')
    setAssigned(response.appointmentResponse)
    console.log(response.appointmentResponse)
    // if(response.data.doctor){
    //     console.log("assigned")
    // }
}


    return (
        <>
<Headerbar/>
            <div className="container body">
                <div className="row mx-5 p-5">
                    <div className="col-2 mx-2" style={{fontSize: '20px'}}>
                    AppointmentId: 
                    </div>
                    <div className="col-5">
                    <input class="form-control " type="text" placeholder="Please enter appointment ID" />
                    </div>
                    <div className="col-2">
                    <button type="button" class="btn btn-outline-success" onClick={appointmentStatus}>Find</button>
                    </div>
                </div>
            </div>
        </>
    )

}