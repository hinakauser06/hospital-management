import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";



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
        <h3 style={{textAlign:"center"}} > Patient Create</h3>
        <input type="text" value={name} placeholder="Enter your name" onChange={(event) => setName(event.target.value)} />
        <input type="text" value={problem} placeholder="Enter you problem" onChange={(event) => setProblem(event.target.value)} />
        <input type="text" value={experience} placeholder="Enter your experience" onChange={(event) => setExperience(event.target.value)} />
        <input typr="text" value={gender} placeholder="your gender" onChange={(event) => setGender(event.target.value)} />
        <input type="text" value={age} placeholder="your age" onChange={(event) => setAge(event.target.value)} />
        <button onClick={createPatient}>Create Patient</button>
    </>
);
}
export default PatientCreate;