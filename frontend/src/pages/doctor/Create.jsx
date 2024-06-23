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
    const [dept, setDept] = useState("sexlogist");
    const [phone, setPhone] = useState("");
    const createDoctor = async () => {



        await apiCall();
        setName("")
        setEmail("")
        setPassword("")
        setDept("")
        setPhone("")
        return navigate("/doctor/list")
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

                    </div>
                </div>

                <div class="row mx-2 p-1" >
                    <div className='col-1'>
                        <label for="email" class="col-form-label">Email: </label>
                    </div>
                    <div className='col-3'>
                        <input type="email" class="form-control" value={email} placeholder='Enter your name' onChange={(event) => setEmail(event.target.value)} />

                    </div>
                </div>

                <div className='row mx-2 p-1'>
                    <div class="col-1">
                        <label for="password" class="col-form-label">Password: </label>
                    </div>
                    <div class="col-3">
                        <input type="password" class="form-control" value={password} placeholder='Enter your password' onChange={(event) => setPassword(event.target.value)} />
                    </div>
                </div>

                <div className='row mx-2 p-1'>
                    <div class="col-1">
                        <label for="dept" class="col-form-label">Dept: </label>
                    </div>
                    <div class="col-3">

                        <select  value={dept} class="form-select" aria-label="Default select example" onChange={(event)=>setDept(event.target.value)}>
                            <option selected>Dept</option>
                            <option value="neurologist">NeuroLogist</option>
                            <option value="gynologist">Gynologist</option>
                            <option value="sexlogist">SexLogist</option>
                        </select>


                        {/* <input type="text" class="form-control" value={dept} placeholder='Enter your dept' onChange={(event) => setDept(event.target.value)}  /> */}
                    </div>
                </div>


                <div className='row mx-2 p-1'>
                    <div class="col-1">
                        <label for="phone" class="col-form-label">Phone: </label>
                    </div>
                    <div class="col-3">
                        <input type="number" class="form-control" value={phone} placeholder='Enter your phone' onChange={(event) => setPhone(event.target.value)} />
                    </div>
                </div>
                <input type="reset" value="Reset" className='btn btn-outline-dark' id='button' />
                <button onClick={createDoctor} className='btn btn-outline-dark' id="button">Create Doctor</button>
                <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="/img/hospitalGroupphoto.jpg" class="d-block w-100 h-50" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="/img/Patient&Doctor.png" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="/img/Patient&Doctor1.jpg" class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>




            </body >







        </>
    );
}
export default DoctorCreate;