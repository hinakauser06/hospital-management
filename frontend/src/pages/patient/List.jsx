import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PatientCard from "../../Components/PatientCard";
import Headerbar from "../../Components/Headerbar";

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
        <>
            <Headerbar />
            <dic className="container">


                <div className="row">
                    <div className="btn-add" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h3 className="text-center">Patient List</h3>
                        <button className='btn btn-outline-dark' id='button' onClick={redirect}>Add Patient</button>
                    </div>

                    {patientResponse.map((item) => (
                        <div className="col-sm-12 col-md-3">
                            <PatientCard patient={item} />
                        </div>
                    ))}

                </div>
            </dic>
        </>
    );
}
export default PatientList;