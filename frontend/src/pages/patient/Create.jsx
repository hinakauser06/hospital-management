import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Headerbar from "../../Components/Headerbar";



function PatientCreate(props) {
    const apiCall = async () => {
        const response = await axios.post("http://localhost:5000/patient", {
            name: name,
            problem: problem,
            experience: experience,
            gender: gender,
            age: age
        })
    }
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [problem, setProblem] = useState("");
    const [experience, setExperience] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const createPatient = async () => {
        await apiCall();
        setName("")
        setProblem("")
        setExperience("")
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
                <form onSubmit={createPatient} className="form my-5">
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
                            <label for="problem" className="col-form-label">Problem: </label>
                        </div>
                        <div className="col-3">
                            <input type="text" value={problem} className="form-control" placeholder="Enter you problem" onChange={(event) => setProblem(event.target.value)} />

                        </div>
                    </div>

                    <div className="row mx-2 p-1">
                        <div className="col-1">
                            <label for="experience" className="col-form-label">Experience: </label>
                        </div>
                        <div className="col-3">
                            <input type="text" value={experience} className="form-control" placeholder="Enter your experience" onChange={(event) => setExperience(event.target.value)} />

                        </div>
                    </div>

                    <div className='row mx-2 p-1 '>
                        <label className="form-label col-1">Gender</label>
                        <div className="form-check col-1 ms-2">
                            <input className="form-check-input" type="radio" name="gender" id="male" value={gender} onChange={(event) => setGender(event.target.value)}  />
                            <label className="form-check-label" htmlFor="male">
                                Male
                            </label>
                        </div>

                        <div className="form-check col-1">
                            <input className="form-check-input" type="radio" name="gender" id="female" value={gender} onChange={(event) => setGender(event.target.value)}  />
                            <label className="form-check-label" htmlFor="female">
                                Female
                            </label>
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
                    <button type="submit" className='btn btn-outline-dark' id='button' >Create Patient</button>
                </form>
            </body>
        </>
    );
}
export default PatientCreate;