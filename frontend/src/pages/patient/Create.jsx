import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Headerbar from "../../Components/Headerbar";



function PatientCreate(props) {
    const apiCall = async () => {
        const response = await axios.post("http://localhost:5000/patient", {
            name: name,
            email: email,
            password: password,
           address: address,
            gender: gender,
            age: age,
            phone: phone
        })
    }
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
   
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const createPatient = async () => {
        await apiCall();
        setName("")
        setEmail("")
        setPassword("")
        setAddress("")
     setPhone("")
        setGender("")
        setAge("")
        return navigate("/patient/list")
    }



    return (
        <>
        <Headerbar/>
            <body className="container body">
                <h3 style={{ textAlign: "center" }} >
                    <i className="bi bi-person"></i>  Patient Create</h3>
                    <div className="row mx-2 p-1">
                        <div className="col-1">
                            <label for="name" className="col-form-label">Name: </label>
                        </div>
                        <div className="col-3">
                            <input type="text" value={name} className="form-control" placeholder="Enter your name" onChange={(event) => setName(event.target.value)} required />

                        </div>
                    </div>

                    <div className="row mx-2 p-1">
                        <div className="col-1">
                            <label for="email" className="col-form-label">Email: </label>
                        </div>
                        <div className="col-3">
                            <input type="email" value={email} className="form-control" placeholder="Enter your email" onChange={(event) => setEmail(event.target.value)}  />

                        </div>
                    </div>

                    <div className="row mx-2 p-1">
                        <div className="col-1">
                            <label for="password" className="col-form-label">Password: </label>
                        </div>
                        <div className="col-3">
                            <input type="password" value={password} className="form-control" placeholder="Enter your password" onChange={(event) => setPassword(event.target.value)} required />

                        </div>
                    </div>

                    <div className="row mx-2 p-1">
                        <div className="col-1">
                            <label for="address" className="col-form-label">Address: </label>
                        </div>
                        <div className="col-3">
                            <input type="text" value={address} className="form-control" placeholder="Enter you address" onChange={(event) => setAddress(event.target.value)} />

                        </div>
                    </div>

                   

                    <div className='row mx-2 p-1 '>
                        <label className="form-label col-1">Gender</label>
                        <div className="form-check col-1 ms-2">
                            <input className="form-check-input" type="radio" name="gender" id="male" checked={gender==="male"} onChange={(event) => setGender(event.target.id)}  />
                            <label className="form-check-label" htmlFor="male">
                                Male
                            </label>
                        </div>

                        <div className="form-check col-1">
                            <input className="form-check-input" type="radio" name="gender" id="female" checked={gender==="female"} onChange={(event) => setGender(event.target.id)}  />
                            <label className="form-check-label" htmlFor="female">
                                Female
                            </label>
                        </div>
                    </div>



                    <div className="row mx-2 p-1">
                        <div className="col-1">
                            <label for="phone" className="col-form-label">Phone: </label>
                        </div>
                        <div className="col-3">
                            <input type="number" value={phone} className="form-control" placeholder="your phone" onChange={(event) => setPhone(event.target.value)} />
                        </div>
                    </div>

                    <div className="row mx-2 p-1">
                        <div className="col-1">
                            <label for="age" className="col-form-label">Age: </label>
                        </div>
                        <div className="col-3">
                            <input type="number" value={age} className="form-control" placeholder="your age" onChange={(event) => setAge(event.target.value)} />
                        </div>
                    </div>
                    <input type="reset" value="Reset" className='btn btn-outline-dark' id='button' />
                    <button onClick={createPatient} className='btn btn-outline-dark' id='button' >Create Patient</button>
                
            </body>
        </>
    );
}
export default PatientCreate;