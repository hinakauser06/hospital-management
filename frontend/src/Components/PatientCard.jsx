
function PatientCard(props) {
    return (
        <>
            <div className="card " style={{ width: '18rem', border: '1px solid blue' }}>
                <img src="/img/patientCatoon.jpg" className="card-img-top" alt="" style={{ height: '100px' }} />
                <div className="card-body">
                    <h5 className="card-title">{props.patient.name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{props.patient.email}</li>
                </ul>
            </div>
        </>
    );
}
export default PatientCard;