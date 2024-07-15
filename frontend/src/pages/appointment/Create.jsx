import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";
import Headerbar from '../../Components/Headerbar';
export default function Create() {

    const apiCall = async () => {
        const response = await axios.post("http://localhost:5000/appointment", {
            dept: dept,
            problem: problemDetail,
            patientId: data._id

        })
    }
    const navigate = useNavigate();
    const [dept, setDept] = useState("");
    const [problemDetail, setProblemDetail] = useState("");
    const [data, setData] = useState()
    const createAppoinment = async () => {
        await apiCall();
        setDept("")
        setProblemDetail("")
        return navigate("/profile/patient")
    }
    useEffect(() => {
        let userdata = localStorage.getItem("data")
        userdata = JSON.parse(userdata)
        console.log(userdata)
        setData(userdata)
    }, [])

    return (
        <>
            <Headerbar />
            <div class="container">
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
                <div class="mb-3">
                    <label class="form-label">Problem In Detail</label>
                    <textarea value={problemDetail} onChange={(e) => setProblemDetail(e.target.value)} class="form-control" rows="3" maxLength={100}></textarea>
                    <p>Characters remaining: {100 - problemDetail.length}</p>
                </div>
                <button className='btn btn-outline-danger btn-block' onClick={createAppoinment}>Create</button>
            </div>
        </>
    )
}