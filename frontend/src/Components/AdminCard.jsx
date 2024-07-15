function AdminCard(props) {
    return (
        <>
            <div class="container " >
                <div class="row justify-content-center " >
                    <div class="d-flex pb-3"  >
                        <div class="team-item " >
                            <div class="mb-30 position-relative align-items-center">
                                <span class="img-holder d-inline-block">
                                    <img src="/img/adminCartoon1.avif" alt="admin" />
                                </span>
                            </div>
                            <div class="team-content">
                                <h5 class="mb-2">{props.admin.name}</h5>
                                <p class="text-lowecase mb-0"> {props.admin.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default AdminCard;