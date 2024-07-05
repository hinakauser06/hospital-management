function AdminCard(props) {
    return (
        <>

            <div class="container " >
                <div class="row justify-content-center " >
                    <div class="d-flex pb-3"  >
                        <div class="team-item " >
                            <div class="mb-30 position-relative align-items-center">
                                <span class="socials d-inline-block">
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