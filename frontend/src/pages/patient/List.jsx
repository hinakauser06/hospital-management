import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PatientCard from "../../Components/PatientCard";

function PatientList(props) {
    const navigate = useNavigate();
    const [patientResponse, setpatientResponse] = useState([]);
    const apiCall = async () => {
        const response = await axios.get('http://localhost:5000/patient');
        console.log(response);
        setpatientResponse(response.data);
    }
    useEffect(() => {
        console.log('Componenet mounted');
        apiCall()
    }, []);


    const redirect = () => {
        return navigate("/patient/create");
    }
    return (
        <div className="App">
            <button onClick={redirect}>Add Patient</button>
            {patientResponse.map((item) => (<PatientCard patient={item} />
            ))}
        </div>
    );
}
export default PatientList;