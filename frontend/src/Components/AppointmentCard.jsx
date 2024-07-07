import React, { useState, useEffect } from 'react';
import axios from "axios";
export default function AppointmentCard(props) {
    const [doctorId, setdoctorId] = useState();
    const [doctorResponse, SetdoctorResponse] = useState([]);

    const assignDoctor = async () => {
        console.log(doctorId)
        await apiCallAssign()
        props.refreshList()
    }
    const apiCallList = async (dept) => {
        const response = await axios.get(`http://localhost:5000/doctor?dept=${dept}`)
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
    }
    useEffect(() => {
        if (!props.appointment.isAssigned) {
            apiCallList(props.appointment.dept)
        }
    }, [])
    return (
        <>
            <div class="card" style={{ width: "20rem" }}>
                <img src="/img/patientFemale.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.appointment.patientId.name}</h5>
                    <p class="card-text">{props.appointment.problem}.</p>
                    <p class="card-text">Age: {props.appointment.patientId.age}</p>
                    <p class="card-text">Gender: {props.appointment.patientId.gender}</p>
                    <p class="card-text">Is Assigned: {props.appointment.isAssigned ? <>Yes</> : <>No</>}</p>
                </div>
                {!props.appointment.isAssigned &&
                    <>
                        <select value={doctorId} class="form-select" aria-label="Default select example" onChange={(event) => setdoctorId(event.target.value)}>
                            <option selected>Select Doctor</option>

                            {doctorResponse.map((e) => (<option value={e._id} key={e._id}> {e.name}</option>))}
                        </select>
                        <button type="button" class="btn btn-primary" onClick={assignDoctor}>Assign</button>
                    </>
                }
                {
                    props.appointment.isAssigned && <p>Doctors :  {props.appointment.doctorId.name}</p>
                }
            </div>
        </>
    )
}