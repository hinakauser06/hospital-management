import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AdminCard from "../../Components/AdminCard";
import Headerbar from "../../Components/Headerbar";
import Footer from "../../Components/Footer";

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
            <div className="container">
                <div className="row my-3">
                    <div className="col-10">
                        <h3 className="text-center" >Admin List</h3>
                    </div>
                    <div className="col-2">
                        <button className='btn btn-outline-dark ' id='button' onClick={redirect} >Add Admin</button>
                    </div>
                </div>
                <div className="row" >
                    {adminResponse.map((admin) => (
                        <div className="col-sm-12 col-md-3">
                            <AdminCard admin={admin} />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
export default AdminList