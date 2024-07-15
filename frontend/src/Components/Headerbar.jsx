import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Headerbar(props) {
    const navigate = useNavigate();
    function logOut() {
        localStorage.clear()
        setLoggedin(false)
        navigate('/')
    }
    function ProfileRedirect() {
        navigate('/profile/' + usertype)
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
            <nav className="navbar navbar-expand-lg bg-primary " style={{ height: "60px" }} >
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#">
                        <img src="/img/logo1.jpg" alt="logo" style={{ height: "50px", width: "50px", borderRadius: '25px' }} />
                    </a>
                    {/* for icon */}
                    <ul class="social-media-icons">
                        <li><a href="https://facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="https://linkedin.com" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                        <li><a href="https://linkedin.com" target="_blank"><i class="fab fa-whatsapp"></i></a></li>
                        <li><a href="https://linkedin.com" target="_blank"><i class="fab fa-pinterest-p"></i></a></li>
                    </ul>
                    <nav class="navbar bg-body-primary">
                        <div class="container-fluid ms-5" >
                            <form class="d-flex" role="search">
                                <input class="form-control me-2 ms-5" type="search" placeholder="Search here" aria-label="Search" />
                                <button class="btn btn-outline-info" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/aboutus">About Us</Link>
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
                            {isLoggedin ? <button type="button" class="btn btn-danger btn-sm" onClick={logOut}>Logout</button> : <li className="nav-item">
                                <Link className="nav-link text-white" to="/login">Login</Link>
                            </li>}
                            {isLoggedin}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Headerbar;