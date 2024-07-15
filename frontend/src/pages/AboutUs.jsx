import Footer from "../Components/Footer"
import Headerbar from "../Components/Headerbar"
export default function AboutUs() {

    return (
        <>
            <Headerbar />
            <div className="container">
                <div className="col-12 text-center" >
                    <h3 style={{ color: "darkBlue", margin: '20px' }}>
                        About Us
                    </h3>
                    <div className="row">
                        <div className="col-6 " >
                            <h5 style={{ color: "blue", marginTop: '80px' }}>
                                Hospital– Pune: Providing Optimal Healthcare
                            </h5>
                            <br />
                            <p >
                                This is an endeavor to alleviate the suffering of patients, by providing the best of healthcare at
                                an optimal cost. A Multispeciality hospital that is centrally located and adorned
                                with state–of–the–art infrastructure and an eminent panel of doctors are in a nutshell what we
                                are all about. A highly sophisticated setup and a panel of super specialists functioning
                                smoothly in a culture of care, commitment, dedication and concern.
                            </p>
                            <p style={{ fontSize: '22px', color: 'red' }}>
                                24x7 Helpline Number : 12345674567
                            </p>
                        </div>
                        <div className="col-6 ms-0 ps-0" >
                            <img src="img/hospital.webp" alt="hospital" style={{ height: "500px", width: '570px' }} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}