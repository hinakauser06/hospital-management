import { useState , useEffect} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Headerbar(props) {
    const navigate = useNavigate();
    function logOut(){
        localStorage.clear()
        setLoggedin(false)
    }
    function ProfileRedirect(){
         
        navigate('/profile/'+usertype)
    }
    const [isLoggedin, setLoggedin] = useState(false)
    const [usertype, setUsertype] = useState("")
    useEffect(() => {
        const isLogged = localStorage.getItem("loggedin")
        console.log(isLoggedin)
        if (isLogged) {
            setLoggedin(true)
            const user = localStorage.getItem("usertype")
            setUsertype(user)

        }


    }, [])

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-primary " >
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#">NGO</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/doctor/list">Doctor</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/patient/list">Patient</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/admin/list">Admin</Link>
                            </li>
                            {isLoggedin && <li className="nav-item" onClick={ProfileRedirect}><a className="nav-link text-white">Profile</a></li>}
                            {isLoggedin ?  <button type="button" class="btn btn-danger btn-sm" onClick={logOut}>Logout</button> :<li className="nav-item">
                                <Link className="nav-link text-white" to="/login">Login</Link>
                            </li> }
                           
{isLoggedin} 

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}
export default Headerbar;