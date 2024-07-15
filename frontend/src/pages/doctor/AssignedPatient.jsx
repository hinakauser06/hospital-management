import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import PatientCard from "../../Components/PatientCard"
import Headerbar from "../../Components/Headerbar"

export default function AssignedPatient(props) {
    const currentDoctor = JSON.parse(localStorage.getItem('data'))
    console.log(currentDoctor)
    const [patientList, setPatientList] = useState([])
    const apiCall = async () => {
        const response = await axios.get('http://localhost:5000/appointment')
        console.log(response.data)
        setPatientList(response.data)
    }
    useEffect(() => {
        apiCall()
    }, [currentDoctor.name])

    return (
        <>
            <Headerbar />
            <div className="container body">
                <div className="row">
                    {patientList.map((item) => (
                        item.doctor.name === currentDoctor.name ?
                            <div className="col-md-4 col-sm-12 col-2" key={item._id}  >
                                <div class="card m-3" >
                                    <div class="card-body">
                                        <h5 class="card-title">Name: {item.patient.name}</h5>
                                        <h6 class="card-subtitle mb-2 text-body-secondary"> {item.patient.age} yrs, {item.patient.gender}</h6>
                                        <p class="card-text">{item.problem}</p>
                                        {/* <a href="#" class="card-link">Card link</a>
                                        <a href="#" class="card-link">Another link</a> */}
                                    </div>
                                </div>                                                             
                            </div>
                             : <></>
                    ))}
                </div>
            </div>
        </>
    )
}