import Footer from "../Components/Footer";
import Headerbar from "../Components/Headerbar";

function Dashboard(props) {

    return (
        <>
            <Headerbar />
            <div className="container">
                <div className="row" >
                    <div className="col-5 mt-5 pt-5 text-center" >
                        <p>
                            <b className="m-5"><i className="fa fa-medkit"></i> Your Health Our Priority</b> <br />
                            <p className="m-3">
                                <i className="fa fa-user-md"></i> 24x7 Service Available</p>

                        </p>
                        <hr style={{
                            border: 0,
                            height: "5px",
                            background: "red",
                            margin: '20px 0'
                        }} ></hr>
                        <div className="col-12 mt-5 " style={{ color: 'red' }}>
                            <p><i className="fa fa-ambulance"></i>  For Support : +91-456-67-678</p>
                        </div>
                        <div className="col-12" style={{ color: 'red' }}>
                            <p><i className="fa fa-users"></i>  For Appointment : +91-456-67-699</p>
                        </div>
                    </div>
                    <div className="col-7 mt-5 ps-0">
                        <div id="carouselExample" class="carousel slide" >
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="/img/homeimg1.jpg" class="d-block w-100 " alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="/img/Patient&Doctor.png" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="/img/hospitalgroupphoto.jpg" class="d-block w-100 " alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="false"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="false"></span>
                                <span class="visually-hidden" >Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Dashboard