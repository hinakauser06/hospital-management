import axios from 'axios';
import React, { useState, useEffect } from 'react';

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

        <div className="App">
            <button onClick={redirect}>Add Doctor</button>
            {doctorResponse.map((doc) => (
                <DoctorCard doctor={doc} />
            ))}

            {/* {patientResponse.map((item) => (
                <PatientCard patients={item} />
            ))}

            {console.log(patientResponse)} */}
        </div>

    );
}
export default DoctorList