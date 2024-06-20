function DoctorForm(props){
    return(
        <>
        <form className="form">
        <div className="inputData">
            <h1>Doctor's Form</h1>
            <p> Please enter your details <i>*these are mandatory details</i></p>
            <div className="doctorDetails">
                <label for="Name">
                    <li>Name:
                       <input type="text" id="name"  />
                     </li>
                     <li>Name:
                       <input type="text" id="name"  />
                     </li>
                     <li>Name:
                       <input type="text" id="name"  />
                     </li>
                     <li>Name:
                       <input type="text" id="name"  />
                     </li>
                     <li>Name:
                       <input type="text" id="name"  />
                     </li>
                    </label>
            </div>
        </div>
        </form>
        </>
    )
}