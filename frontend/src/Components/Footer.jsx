import { Link } from "react-router-dom";
export default function Footer() {

    return (
        <>
            <footer className="footer" >
                <div className="container" >
                    <div className="row m-5"></div>
                    <div className="row mt-5">
                        <div className="col-3">
                            <img src="img/logo1.jpg" alt="logo" style={{ height: '100px', width: '100px', borderRadius: '100px' }} />
                            <h5> Hospital </h5>
                            <p>
                                Human Life is about living it to the fullest. We at this Hospital,
                                care for humanity and wish to have a disease free world.
                            </p>
                        </div>
                        <div className="col-5 text-center">
                            <h5> Contact Us</h5>
                            <hr />
                            <ul style={{ listStyle: "none" }}>
                                <li>
                                    <i class="fas fa-map-marker-alt footer-icon m-2 " > Location</i>
                                    <p>
                                        Hospital Building, S. No. 15, Fatima Nagar, Wanowrie, Pune, Maharashtra 411040
                                    </p>
                                </li>
                                <li>
                                    <i class="fa fa-envelope footer-icon m-2 " > Mail</i>
                                    <p> hospital@gmail.com</p>
                                </li>
                                <li>
                                    <i class="fas fa-phone-volume footer-icon m-2" > Contact</i>
                                    <p> 24x7 Support: +91-234-45-678

                                    </p>
                                </li>

                            </ul>

                        </div>
                        <div className="col-4 text-center">
                            <h5> Quick Links</h5>
                            <hr />
                            <ul className="ul-decoration" >
                                <li className="m-1">
                                    <Link className="anchor-link " aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="m-1" >
                                    <Link className="anchor-link" aria-current="page" to="/aboutus">About Us</Link>

                                </li>
                                <li className="m-1">
                                    <Link className="anchor-link" aria-current="page" to="/doctor/list">Doctor</Link>

                                </li>
                                <li className="m-1">
                                    <Link className="anchor-link" aria-current="page" to="/admin/list">Admin</Link>

                                </li>
                                <li className="m-1">
                                    <Link className="anchor-link" aria-current="page" to="/patient/list">Patient</Link>

                                </li>
                                <li className="m-1">
                                    <Link className="anchor-link" aria-current="page" to="/login">Login</Link>

                                </li>
                            </ul>

                        </div>
                    </div>

                    <div className="row">

                        <ul class="social-media-icons" >
                            <li><a href="https://facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a></li>
                            <li><a href="https://linkedin.com" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                            <li><a href="https://linkedin.com" target="_blank"><i class="fab fa-whatsapp"></i></a></li>
                            <li><a href="https://linkedin.com" target="_blank"><i class="fab fa-pinterest-p"></i></a></li>
                            <li style={{ marginLeft: '450px' }}>  Copyright © 2024 Inamdar Multispeciality Hospital Pune.</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}