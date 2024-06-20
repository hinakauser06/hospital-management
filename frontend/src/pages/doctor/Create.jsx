import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
function DoctorCreate(props) {
    const apiCall = async () => {
        const response = await axios.post("http://localhost:5000/doctor", {
            name: name,
            password: pwd,
            speciality: speciality,
            experience: experience,
            gender: gender,
            phone: phone

        })
    }
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [pwd, setPwd] = useState("");
    const [speciality, setspeciality] = useState("");
    const [experience, setExperience] = useState("");
    const [gender, setGender] = useState("");
    const [phone, setPhone] = useState("");
    const createDoctor = async () => {



        await apiCall();
        setName("")
        setPwd("")
        setspeciality("")
        setExperience("")
        setGender("")
        setPhone("")
        return navigate("/doctor/list")
    }
    return (
        <>
            <body className='body'>
                <h2 style={{ textAlign: "center" }}>Doctor Create</h2>
                <form onSubmit={createDoctor} className='form'>
                    <div>
                        <label for="name" className='label'>Name: </label>
                        <span>
                            <input type="text" value={name} className="input" placeholder="enter name" onChange={(event) => setName(event.target.value)} required />
                        </span>
                    </div>
                    <div>
                        <label for='pwd' className='label'>Password</label>
                        <span>
                            <input type="password" value={pwd} placeholder="enter pwd" className="input" onChange={(event) => setPwd(event.target.value)} required />
                        </span>
                    </div>
                    <div>
                        <label for="speciality" className='label'>Speciality</label>
                        <span>
                            <input type="text" value={speciality} placeholder="enter specilaity" className="input" onChange={(event) => setspeciality(event.target.value)} />
                        </span>
                    </div>
                    <div>
                        <label for="experience" className='label'>Experience</label>
                        <span>
                            <input type="text" value={experience} placeholder="enter experience" className="input" onChange={(event) => setExperience(event.target.value)} />
                        </span>
                    </div>
                    <div  >
                        <label for="gender" className='label'>Gender:  </label>
                           Female:<input type="radio" value={gender} placeholder="enter gender" name="gender" className="input" onChange={(event) => setGender(event.target.value)} />
                           Men: <input type="radio" value={gender} placeholder="enter gender" name="gender" className="input" onChange={(event) => setGender(event.target.value)} />
                                           

                    </div>
                    <div >
                        <label for="phone" className='label'>Phone</label>
                        <span>
                            <input type="number" value={phone} placeholder="enter phone" className="input" onChange={(event) => setPhone(event.target.value)} />
                        </span>
                    </div>
                    <input type="reset" value="Reset" className='btn btn-primary' id='button' />
                    <button type='submit' className='btn btn-primary' id="button">Create Doctor</button>

                </form>
            </body>
        </>
    );
}
export default DoctorCreate;