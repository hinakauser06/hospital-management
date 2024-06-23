
function PatientCard(props) {
    
    return (
        <>
            <div className="card" style={{width: '18rem'}}>
                <img src="/img/Patient&Doctor.png" className="card-img-top" alt="" style={{height:'300px'}}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.patient.name}</h5>
                        <p className="card-text">{props.patient.email}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{props.patient.phone}</li>
                        <li className="list-group-item">{props.patient.address}</li>
                        <li className="list-group-item">{props.patient.gender}</li>
                        <li className="list-group-item">{props.patient.password}</li>
                        <li className="list-group-item">{props.patient.age}</li>
                    </ul>
                    <div className="card-body">
                        {/* <a href="#" className="card-link">{props.patients.ward}</a> */}
                        {/* <a href="#" className="card-link">Another link</a> */}
                    </div>
            </div>
        </>
    );
}
export default PatientCard;