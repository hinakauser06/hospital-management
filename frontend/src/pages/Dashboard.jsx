import Headerbar from "../Components/Headerbar";

function Dashboard(props) {

    return (
        <>
            <Headerbar />
           
                <div id="carouselExample" class="carousel slide" style={{maxWidth: "1400px", maxHeight: "700px", border: '1px solid black'}}>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="/img/hospitalGroupphoto.jpg" class="d-block w-100 " alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="/img/Patient&Doctor.png" class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src="/img/Patient&Doctor1.jpg" class="d-block w-100 " alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="false"></span>
                        <span class="" style={{color: 'black'}} >Next</span>
                    </button>
                </div>
            

        </>
    );
}
export default Dashboard