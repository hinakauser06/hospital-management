import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Headerbar from '../../Components/Headerbar';

import { useNavigate } from 'react-router-dom';
// import AdminCard from './Components/AdminCard';
import DoctorCard from "../../Components/DoctorCard";
// import PatientCard from "../../Components/PatientCard";


function DoctorList(props) {
    const navigate = useNavigate();

    // const [adminResponse, setadminResponse] = useState([]);
    // const [patientResponse, setpatientResponse] = useState([]);
    const [doctorResponse, setdoctorResponse] = useState([]);
    const apiCall = async () => {
        const response = await axios.get('http://localhost:5000/doctor')
        console.log(response)
        setdoctorResponse(response.data)

        // const response1 = await axios.get('http://localhost:5000/patients')
        // console.log(response1)
        // setpatientResponse(response1.data)

        // const response2 = await axios.get('http://localhost:5000/admin')
        // console.log(response2)
        // setadminResponse(response2.data)
    }

    useEffect(() => {
        console.log('Component mounted');
        apiCall()

    }, []);
    const redirect = () => {
        return navigate("/doctor/create")
    }

    return (
        <>
        <Headerbar/>

        <div className="body">
                <div className="btn-add" style={{ border: '2px solid black' }}>
                    <button className='btn btn-outline-dark  ' id='button' onClick={redirect}>Add Doctor</button>

                </div>
                <div style={{ border: '3px solid red', display: 'flex' }} className="p-2 ">
                    {doctorResponse.map((doc) => (<DoctorCard doctor={doc} />
                    ))}
                </div>
            </div>

       
</>
    );
}
export default DoctorList