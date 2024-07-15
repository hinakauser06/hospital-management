import React, { useState, useEffect } from 'react';
import axios from "axios";
export default function AppointmentCard(props) {
    const [doctorId, setdoctorId] = useState();
    const [doctorResponse, SetdoctorResponse] = useState([]);
    const [showAlert, setShowAlert] = useState(false)
    //  implementation for assigning a doctor to patient by admin

    const assignDoctor = async () => {
        if (doctorId) {
            console.log(doctorId)
            await apiCallAssign()
            props.refreshList()
            setShowAlert(false)
        }
        else {
            console.log("select doctor")
            setShowAlert(true)
        }
    }
    // to get doctor list from db for doctor selection in frontend for assigning doctor
    const apiCallList = async (dept) => {
        console.log(dept)
        const response = await axios.get(`http://localhost:5000/doctor?dept=${dept}`)
        console.log(response)
        if (response && response.data && response.data.length > 0) {
            SetdoctorResponse(response.data)
        }
    }
    const apiCallAssign = async () => {
        const response = await axios.patch('http://localhost:5000/admin/doctor-assign',
            {
                appointmentId: props.appointment._id,
                doctorId: doctorId
            })
        console.log(response)
    }
    useEffect(() => {
        if (!props.appointment.isAssigned) {
            apiCallList(props.appointment.dept)
            console.log(props.appointment.dept)
        }
        // console.log(props.appointment.doctorId.name)
    }, [])
    return (
        <>
            <div class="card" style={{ width: "20rem" }}>
                <img src="/img/patientcatoon.jpg" class="card-img-top" alt="..." style={{ height: '150px' }} />
                <div class="card-body">
                    <h5 class="card-title">{props.appointment.patientId.name}</h5>
                    <p class="card-text">{props.appointment.problem}.</p>
                    <p class="card-text">Age: {props.appointment.patientId.age}</p>
                    <p class="card-text">Gender: {props.appointment.patientId.gender}</p>
                    <p class="card-text">Is Assigned: {props.appointment.isAssigned ? <>Yes</> : <>No</>}</p>
                    {/* </div> */}
                    {!props.appointment.isAssigned &&
                        <>
                            <select value={doctorId} class="form-select" aria-label="Default select example" onChange={(event) => setdoctorId(event.target.value)}>
                                <option selected>Select Doctor</option>

                                {doctorResponse.map((e) => (<option value={e._id} key={e._id}> {e.name}</option>))}
                            </select>
                            <button type="button" class="btn btn-primary" onClick={assignDoctor}>Assign</button>
                            {showAlert && <div class="alert alert-warning" role="alert">
                                Please select a Doctor
                            </div>}
                        </>
                    }
                    {
                        props.appointment.isAssigned && <p> Doctors :  {props.appointment.doctorId.name}</p>
                    }
                </div>
            </div>
        </>
    )
}