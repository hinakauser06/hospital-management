import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import Headerbar from '../../Components/Headerbar';
function DoctorCreate(props) {
    const apiCall = async () => {
        const response = await axios.post("http://localhost:5000/doctor", {
            name: name,
            email: email,
            password: password,
            dept: dept,
            phone: phone
        })
    }
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dept, setDept] = useState("");
    const [phone, setPhone] = useState("");
    const [errors, setErrors] = useState({})
    const createDoctor = async (event) => {
        // for validation
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
        if (!phone) {
            validationErrors.phone = "Phone Number is required";
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        // end of validation
        await apiCall();
        setName("")
        setEmail("")
        setPassword("")
        setDept("")
        setPhone("")
        return navigate("/doctor/list")
    }
    const handleReset = () => {
        setName("")
        setEmail("")
        setPassword("")
        setDept("")
        setPhone("")
    }
    return (
        <>
            <Headerbar />
            <body className='container body'>
                <h2 style={{ textAlign: "center" }}>
                    <i className="fas fa-stethoscope"></i> Doctor Create</h2>
                <div class="row mx-2 p-1" >
                    <div className='col-1'>
                        <label for="name" class="col-form-label">Name: </label>
                    </div>
                    <div className='col-3'>
                        <input type="text" class="form-control" value={name} placeholder='Enter your name' onChange={(event) => setName(event.target.value)} required />
                        {errors.name && <span className="text-danger">{errors.name}</span>}
                    </div>
                </div>
                <div class="row mx-2 p-1" >
                    <div className='col-1'>
                        <label for="email" class="col-form-label">Email: </label>
                    </div>
                    <div className='col-3'>
                        <input type="email" class="form-control" value={email} placeholder='Enter your name' onChange={(event) => setEmail(event.target.value)} />
                        {errors.email && <span className="text-danger">{errors.email}</span>}
                    </div>
                </div>
                <div className='row mx-2 p-1'>
                    <div class="col-1">
                        <label for="password" class="col-form-label">Password: </label>
                    </div>
                    <div class="col-3">
                        <input type="password" class="form-control" value={password} placeholder='Enter your password' onChange={(event) => setPassword(event.target.value)} />
                        {errors.password && <span className="text-danger">{errors.password}</span>}
                    </div>
                </div>
                <div className='row mx-2 p-1'>
                    <div class="col-1">
                        <label for="dept" class="col-form-label">Dept: </label>
                    </div>
                    <div class="col-3">
                        <select value={dept} class="form-select" aria-label="Default select example" onChange={(event) => setDept(event.target.value)}>
                            <option selected>Dept</option>
                            <option value="physician">Physician</option>
                            <option value="neurologist">Neurologist</option>
                            <option value="gynologist">Gynologist</option>
                            <option value="andrologist">Andrologist</option>
                            <option value="sexologist">SexoLogist</option>
                            <option value="dermatologist">Dermatologist</option>
                            <option value="cardiologist">Cardiologist</option>  {/*heart*/}
                            <option value="oncologists">Oncologists</option>  {/*cancer*/}
                            <option value="ophthalmologists">Ophthalmologists</option>  {/*eye*/}
                        </select>
                    </div>
                </div>
                <div className='row mx-2 p-1'>
                    <div class="col-1">
                        <label for="phone" class="col-form-label">Phone: </label>
                    </div>
                    <div class="col-3">
                        <input type="number" class="form-control" value={phone} placeholder='Enter your phone' onChange={(event) => setPhone(event.target.value)} />
                        {errors.phone && <span className="text-danger">{errors.phone}</span>}
                    </div>
                </div>
                <button onClick={createDoctor} className='btn btn-outline-dark' id="button">Create Doctor</button>
                <button onClick={handleReset} className='btn btn-outline-dark' id="button">Reset</button>
            </body >
        </>
    );
}
export default DoctorCreate;