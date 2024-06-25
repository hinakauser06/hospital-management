import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminCard from "../../Components/AdminCard";
import Headerbar from "../../Components/Headerbar";

function AdminList(props) {
    const navigate = useNavigate();
    const [adminResponse, setadminResponse] = useState([]);
    const apiCall = async () => {
        const response = await axios.get('http://localhost:5000/admin')
        console.log(response)
        setadminResponse(response.data)
    }
    useEffect(() => {
        console.log('componenet mounted')
        apiCall()
    }, [])
    const redirect = () => {
        return navigate("/admin/create")
    }
    return (
        <>
            <Headerbar />
            <div className="body">
                <div className="btn-add" style={{ border: '2px solid black' }}>
                    <button className='btn btn-outline-dark  ' id='button' onClick={redirect}>Add Admin</button>

                </div>
                <div style={{ border: '3px solid red'  }}>
                    {adminResponse.map((admin) => (<AdminCard admin={admin} />
                    ))}
                </div>
            </div>
        </>
    );
}
export default AdminList