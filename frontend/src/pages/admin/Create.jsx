import { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios"
import Headerbar from "../../Components/Headerbar";


function AdminCreate(props) {
    const apiCall = async () => {
        const response = await axios.post("http://localhost:5000/admin", {
            name: name,
            email: email,
            password: password
        })
    }
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState({})

    const createAdmin = async (event) => {
        //  for validation
        event.preventDefault();
        const validationErrors = {};

        if (!name) {
            validationErrors.name = "Name is required";
        }
        if (!email) {
            validationErrors.email = "Email is required";
        }
        else if (!/\S+@\S+\.\S+/.test(email)) {
            validationErrors.email = "Email format is invalid";
        }
        if (!password) {
            validationErrors.password = "Password is required";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        //  end
        await apiCall();
        setName("")
        setPassword("")
        setEmail("")
        return navigate("/admin/list")
    }
    const handleReset = () => {
        setName("")
        setPassword("")
        setEmail("")
    }
    return (
        <>
            <Headerbar />
            <body className="container body   ">
                <h2 style={{ textAlign: "center" }}>
                    <i className="bi bi-person-fill"></i> Admin Create</h2>
                <div className="box" >
                    <div className="row mx-2 p-1 ">
                        <div className="col-3">
                            <label for="name" className="col-form-label">Name: </label>
                        </div>
                        <div className="col-7">
                            <input type="text" value={name} className="form-control" placeholder="Enter your name" onChange={(event) => setName(event.target.value)} required />
                            {errors.name && <span className="text-danger">{errors.name}</span>}
                        </div>
                    </div>
                    <div className="row mx-2 p-1">
                        <div className="col-3">
                            <label for="email" className="col-form-label">Email: </label>
                        </div>
                        <div className="col-7">
                            <input type="email" value={email} className="form-control" placeholder="Enter your email" onChange={(event) => setEmail(event.target.value)} />
                            {errors.email && <span className="text-danger">{errors.email}</span>}
                        </div>
                    </div>
                    <div className="row mx-2 p-1">
                        <div className="col-3">
                            <label for="password" className="col-form-label">Password: </label>
                        </div>
                        <div className="col-7">
                            <input type="text" value={password} className="form-control" placeholder="ex: 123!@#abc" onChange={(event) => setPassword(event.target.value)} />
                            {errors.password && <span className="text-danger">{errors.password}</span>}
                        </div>
                    </div>
                    <div className="btn-create">
                        <button className='btn btn-outline-dark' id='button' onClick={createAdmin}>Create Admin</button>
                        <button className='btn btn-outline-dark' id='button' onClick={handleReset}>Reset</button>
                    </div>
                </div>
            </body>
        </>
    )
}
export default AdminCreate;

