import { useEffect, useState } from "react"
import Headerbar from "../../Components/Headerbar"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import AppointmentCard from "../../Components/AppointmentCard"

export default function AppointmentList(props) {
    const navigate = useNavigate()
    const [appointmentResponse, setappointmentResponse] = useState([])

    const apiCall = async () => {
        const response = await axios.get('http://localhost:5000/appointment')
        setappointmentResponse(response.data)
    }



    useEffect(() => {
        apiCall()
    }, [])

    return (

        <>
            <Headerbar />
            <div className="container body">
                <div className="btn-add" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 className="text-center">Appointment List</h3>
                </div>
                <div className="row" >
                    {appointmentResponse.map((appointment) => (
                        <div className="col-sm-12 col-md-4 p-2 ">
                            <AppointmentCard appointment={appointment} refreshList={apiCall} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

}