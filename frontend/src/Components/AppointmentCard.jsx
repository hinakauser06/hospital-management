export default function AppointmentCard(props) {

    return (
        <>
            <div class="card" style={{width: "20rem"}}>
                <img src="/img/patientFemale.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.appointment.patient.name}</h5>
                    <p class="card-text">{props.appointment.problem}.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Is Assigned: {props.appointment.doctor.name ? <> Yes </> : <>No</>}</li>
                    <li class="list-group-item">Appointed To Dr. {props.appointment.doctor.name}</li>
                    <li class="list-group-item">Dept: {props.appointment.dept}</li>
                    <li class="list-group-item">Age: {props.appointment.patient.age}</li>
                    <li class="list-group-item">Gender: {props.appointment.patient.gender}</li>
                </ul>
                <div class="card-body">
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>
        </>
    )
}