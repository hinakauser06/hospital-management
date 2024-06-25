
function DoctorCard(props) {
    return (
        <>
           
            <div class="container " style={{border: '1px solid black'}}>

                <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-5 mb-30">
                        <div class="team-item" style={{border: '1px solid black'}}>
                            <div class="mb-30 position-relative d-grid align-items-center">
                                <span class="socials d-inline-block">
                                {/* <i class=" zmdi bi-envelope-at-fill"></i> */}
                                <a href="#" class="zmdi zmdi-home"></a>

                                    <a href="#" class="zmdi zmdi-email"></a>
                                    <a href="#" class="zmdi zmdi-phone"></a>
                                    <a href="#" class="zmdi zmdi-comment"></a>
                                </span>
                                <span class="img-holder d-inline-block">
                                    <img src="/img/doctorMale.png" alt="Team" />
                                </span>
                            </div>
                            <div class="team-content">
                                <h5 class="mb-2">{props.doctor.name}</h5>
                                <p class="text-uppercase mb-0"></p>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </>
    );
}
export default DoctorCard;