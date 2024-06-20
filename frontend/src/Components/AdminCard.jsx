function AdminCard(props){
    return (
        <>
            <div className="card" style={{width: '18rem'}}>
                <img src="/img/pic1.jpg" className="card-img-top" alt="" style={{height:'300px'}}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.admin.name}</h5>
                        <p className="card-text">{props.admin.dept}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{props.admin.experience}</li>
                        <li className="list-group-item">{props.admin.gender}</li>
                        <li className="list-group-item">{props.admin.age}</li>
                    </ul>
                    <div className="card-body">
                        <a href="#" className="card-link">{props.admin.password}</a>
                        {/* <a href="#" className="card-link">Another link</a> */}
                    </div>
            </div>
        </>
    );
}
export default AdminCard;