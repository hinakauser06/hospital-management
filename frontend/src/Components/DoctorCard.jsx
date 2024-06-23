
function DoctorCard(props) {
    return (
        <>
            <div className="card" style={{width: '18rem'}}>
                <img src="/img/DoctorMale.png" className="card-img-top" alt="" style={{height:'300px'}}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.doctor.name}</h5>
                        <p className="card-text">{props.doctor.email}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{props.doctor.password}</li>
                        <li className="list-group-item">{props.doctor.dept}</li>
                        <li className="list-group-item">{props.doctor.phone}</li>
                    </ul>
                    
            </div>
        </>
    );
}
export default DoctorCard;