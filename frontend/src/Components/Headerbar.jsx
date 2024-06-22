import { Link } from "react-router-dom";
function Headerbar(props) {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-primary " >
                <div class="container-fluid">
                    <a class="navbar-brand text-white" href="#">NGO</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active text-white" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item"> 
                               <Link class="nav-link text-white" to="/doctor/list">Doctor</Link>
                            </li>
                            <li class="nav-item"> 
                               <Link class="nav-link text-white" to="/patient/list">Patient</Link>
                            </li>
                            <li class="nav-item"> 
                               <Link class="nav-link text-white" to="/admin/list">Admin</Link>
                            </li>
                            <li class="nav-item"> 
                               <Link class="nav-link text-white" to="/login">Login</Link>
                            </li>
                            
                            
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Headerbar;