import React , { useEffect, useState } from "react";
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
        <Headerbar/>
            <div className="App">
                <button onClick={redirect}>Add Admin</button>
                {adminResponse.map((admin) => (<AdminCard admin={admin} />
                ))}
            </div>
        </>
    );
}
export default AdminList