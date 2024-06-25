function AdminCard(props) {
    return (
        <>
            
            <div class="container " style={{border: '1px solid yellow', width:'50vh', margin:'0', padding:'0'}}>
                <div class="row justify-content-center " >
                    <div class="col-md-6 col-lg-5 col-12 d-flex " style={{border: '1px solid black', }} >
                        <div class="team-item " style={{border: '1px solid red', }}>
                            <div class="mb-30 position-relative align-items-center">
                                <span class="socials d-inline-block">
                                {/* <i class=" zmdi bi-envelope-at-fill"></i> */}
                                <a href="#" class="zmdi zmdi-home"></a>

                                    <a href="#" class="zmdi zmdi-email"></a>
                                    <a href="#" class="zmdi zmdi-phone"></a>
                                    <a href="#" class="zmdi zmdi-comment"></a>
                                </span>
                                <span class="img-holder d-inline-block">
                                    <img src="/img/AdminPic.jpg" alt="Team" />
                                </span>
                            </div>
                            <div class="team-content">
                                <h5 class="mb-2">{props.admin.name}</h5>
                                <p class="text-uppercase mb-0"></p>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </>
    );
}
export default AdminCard;