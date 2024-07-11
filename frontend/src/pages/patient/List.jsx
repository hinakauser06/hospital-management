import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PatientCard from "../../Components/PatientCard";
import Headerbar from "../../Components/Headerbar";
import Footer from "../../Components/Footer";
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
                <div className="row" style={{ width: '100%' }} >
                    <div className="col-9" >
                        <h3 className="text-center" >Patient List</h3>
                    </div>
                    <div className="col-2" >
                        <button className='btn btn-outline-dark ' id='button' onClick={redirect} >Add Patient</button>
                    </div>
                </div>
                <div className="row p-3" style={{ width: '100%' }}>
                    {patientResponse.map((item) => (
                        <div className="col-sm-12 col-md-3 g-3">
                            <PatientCard patient={item} />
                        </div>
                    ))}
                </div>
            </dic>
            <Footer />
        </>
    );
}
export default PatientList;