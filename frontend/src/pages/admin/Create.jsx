import { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios"


function AdminCreate(props) {
    const apiCall = async () => {
        const response  = await axios.post("http://localhost:5000/admin", {
        name: name,
        dept: dept,
        experience: experience,
        gender: gender,
        age: age,
        password: password
        })
    }
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [dept, setDept] = useState("")
    const [experience , setExperience] = useState("")
    const [gender, setGender] = useState("")
    const [age, setAge] = useState("")
    const [password, setPassword] = useState("")

    const createAdmin = async ()=> {
        await apiCall();
        setName("")
        setDept("")
        setExperience("")
        setGender("")
        setAge("")
        setPassword("")
        return navigate("/admin/list")
    }
    return (
        <>
        <h2 style={{textAlign: "center"}}>Admin Create</h2>
        <input type="text" value={name} placeholder="Enter your name" onChange={(event)=>setName(event.target.value)}/>
        <input type="text" value={dept} placeholder="Dept" onChange={(event)=>setDept(event.target.value)}/>
        <input type="text" value={experience} placeholder="Experience" onChange={(event)=> setExperience(event.target.value)}/>
        <input type="text" value={gender} placeholder="Gender" onChange={(event)=>setGender(event.target.value)}/>
        <input type="text" value={age} placeholder="Ex-23" onChange={(event)=>setAge(event.target.value)}/>
        <input type="text" value={password} placeholder="123!@#abc" onChange={(event)=>setPassword(event.target.value)}/>
        <button onClick={createAdmin} className="btn btn-primary">Create Admin</button> 
        </>
    )
}
export default AdminCreate;

