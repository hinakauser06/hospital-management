import { useEffect, useState } from "react"
import Headerbar from "../../Components/Headerbar"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Patient(props) {
    const [data, setData] = useState({})
    const navigate = useNavigate();
    const [appointmentList, setappointmentList] = useState([])
    const [activeCollapse, setActiveCollapse] = useState(null)
    const collapseToggle = (collapseId) => {
        setActiveCollapse(activeCollapse === collapseId ? null : collapseId)
    }
    const apiCallAppointmentList = async () => {
        const response = await axios.get("http://localhost:5000/appointment")
        setappointmentList(response)
        console.log(response)
    }
    // to create appointment on profile page
    const [dept, setDept] = useState("");
    const [problemDetail, setProblemDetail] = useState("")
    const apiCall = async () => {
        const response = await axios.post("http://localhost:5000/appointment", {
            dept: dept,
            problem: problemDetail,
            patientId: data._id

        })
    }
    const createAppoinment = async () => {
        await apiCall();
        setDept("")
        setProblemDetail("")
    }
    // end
    useEffect(() => {
        const isLogged = localStorage.getItem("loggedin")
        if (isLogged) {
            let userdata = localStorage.getItem("data")
            console.log(userdata)
            userdata = JSON.parse(userdata)
            // console.log(userdata)
            setData(userdata)
            apiCallAppointmentList()
        }
        else {
            navigate("/login")
        }
        return () => { }
    }, [])
    return (
        <>
            <Headerbar />
            <body className="container ">
                <h3 style={{ textAlign: "center" }} >
                    <i className="bi bi-person"></i>  Welcome Back! {data.name}
                </h3>
                <div className="row">
                    <div className="col-8">
                        <div className="row mx-2 p-1" >
                            <div className="col-2" >
                                <label for="name" className="col-form-label">Name:  </label>
                            </div>
                            <div className="col-3 pt-2" >
                                {data.name}
                            </div>
                        </div>
                        <div className="row mx-2 p-1">
                            <div className="col-2">
                                <label for="email" className="col-form-label"> Email: </label>
                            </div>
                            <div className="col-3 pt-2">
                                {data.email}
                            </div>
                        </div>
                        <div className="row mx-2 p-1">
                            <div className="col-2">
                                <label for="address" className="col-form-label">Address: </label>
                            </div>
                            <div className="col-3 pt-2">
                                {data.address}
                            </div>
                        </div>
                        <div className="row mx-2 p-1">
                            <div className="col-1">
                                <label for="phone" className="col-form-label">Phone: </label>
                            </div>
                            <div className="col-3">
                                {data.phone}
                            </div>
                        </div>
                        <div className='row mx-2 p-1 '>
                            <label className="form-label col-2">Gender: </label>
                            <div className="form-check col-1 ms-2">
                                {data.gender}
                            </div>
                        </div>
                        <div className="row mx-2 p-1">
                            <div className="col-2">
                                <label for="age" className="col-form-label">Age: </label>
                            </div>
                            <div className="col-3 pt-2">
                                {data.age}
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: '45px' }}>
                            <div className="col-3 ps-4" >
                                <p class="d-inline-flex">
                                    <button class="btn btn-outline-primary btn-sm" type="button" onClick={() => collapseToggle('createAppointment')}>
                                        Create Appointment
                                    </button>
                                </p>
                            </div>
                            <div className="col-3 g-0" >
                                <p class="d-inline-flex">
                                    <button class="btn btn-outline-primary btn-sm" type="button" onClick={() => collapseToggle('appointmentHistory')}>
                                        Appointment History
                                    </button>
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="col-4">
                        <img src="/img/patientprofile.avif" alt="profile" id="profile" />
                    </div>
                </div>
                <div className="row">
                    <div className=" col-12" >
                        <div class={`collapse ${activeCollapse === 'appointmentHistory' ? 'show' : ''}`} id="appointmentHistory">
                            <div class="card card-body">
                                <div className="container">
                                    <div className="row" >
                                        {
                                            appointmentList && appointmentList.data && appointmentList.data.length > 0 && appointmentList.data.map((e) =>
                                                data._id === e.patientId._id &&
                                                (
                                                    <>
                                                        <div className=" col-sm-6 col-lg-3">
                                                            <div class="card border-success mb-3 " style={{ width: "15rem", Height: "40rem" }}>
                                                                <div class="card-header bg-transparent border-success"> {e.isAssigned ? <><b>Hello {e.patientId.name}, Your Appointment has been Booked with Dr. {e.doctorId.name}</b></> : <><b className="textColor">Not assigned yet </b></>}</div>
                                                                <div class="card-body text-success">
                                                                    <h5 class="card-title"> </h5>
                                                                    <p class="card-text">{e.problem}</p>
                                                                </div>
                                                                {e.isAssigned &&
                                                                    <>
                                                                        <div class="card-footer bg-transparent border-success">{e.isAssigned && e.dept} </div>
                                                                    </>
                                                                }
                                                            </div>
                                                        </div>
                                                    </>

                                                )
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* to create appointment */}
                <div className="row">
                    <div class={`collapse ${activeCollapse === 'createAppointment' ? 'show' : ''}`} id="createAppointment">
                        <div class="card card-body">
                            <div class="card border-success mb-3 " style={{ width: "28rem", Height: "40rem" }}>
                                <div class="card-header bg-transparent border-success">
                                    <div class="col-12" style={{ display: 'flex' }}>
                                        <label for="dept" class="col-form-label col-3"> Select Dept: </label>
                                        <select value={dept} class="form-select" aria-label="Default select example" onChange={(event) => setDept(event.target.value)}>
                                            <option selected>DEPT</option>
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
                                <div class="card-body text-success">
                                    <div class="mb-3">
                                        <label class="form-label">Problem In Detail</label>
                                        <textarea value={problemDetail} onChange={(e) => setProblemDetail(e.target.value)} class="form-control" rows="3" maxLength={100}></textarea>
                                        <p>Characters remaining: {100 - problemDetail.length}</p>
                                    </div>
                                    <button className='btn btn-outline-danger btn-block' onClick={createAppoinment}>Create</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body >
        </>
    )
}
export default Patient