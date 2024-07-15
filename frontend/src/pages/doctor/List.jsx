import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Headerbar from '../../Components/Headerbar';

import { useNavigate } from 'react-router-dom';
// import AdminCard from './Components/AdminCard';
import DoctorCard from "../../Components/DoctorCard";
// import PatientCard from "../../Components/PatientCard";
import Footer from '../../Components/Footer';

function DoctorList(props) {
    const navigate = useNavigate();
    const [doctorResponse, setdoctorResponse] = useState([]);
    const apiCall = async () => {
        const response = await axios.get('http://localhost:5000/doctor')
        console.log(response)
        setdoctorResponse(response.data)
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
            <Headerbar />
            <div className="container" style={{ overflowY: "auto" }}>
                <div className="row my-3">
                    <div className="col-10">
                        <h3 className="text-center" >Doctors List</h3>
                    </div>
                    <div className="col-2">
                        <button className='btn btn-outline-dark ' id='button' onClick={redirect} >Add Doctor</button>
                    </div>
                </div>
                <div className="row">
                    {doctorResponse.map((doc) => (
                        <div className="col-sm-12 col-md-3">
                            <DoctorCard doctor={doc} />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
export default DoctorList