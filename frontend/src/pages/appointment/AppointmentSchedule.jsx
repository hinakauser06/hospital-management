import Headerbar from "../../Components/Headerbar"
import Footer from "../../Components/Footer"

export default function AppointmentSchedule(props) {

    return (
        <>
            <Headerbar />
            <div className="container">
                <div className="row">
                    <div className="col-3 col-lg-4 col-sm-6">
                        <div class="card" style={{ nwidth: '18rem' }}>
                            <div class="card-header">
                                Featured
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">An item</li>
                                <li class="list-group-item">A second item</li>
                                <li class="list-group-item">A third item</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}