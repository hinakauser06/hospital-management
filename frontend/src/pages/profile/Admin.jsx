import { useEffect, useState } from "react"
import Headerbar from "../../Components/Headerbar"
import { useNavigate } from "react-router-dom"

function Admin(props) {
    const [data, setData] = useState({})
    const navigate = useNavigate();

    useEffect(() => {
        const isLogged = localStorage.getItem("loggedin")
        if (isLogged) {
            let userdata = localStorage.getItem("data")
            console.log(userdata)
            userdata = JSON.parse(userdata)
            setData(userdata)

        }
        else {

            navigate("/login")
        }

    }, [])

    return (
        <>
            <Headerbar />
           

            <body className="container body">
                {/* {JSON.stringify(data)}
            <h3>{data.name}</h3> */}


                <h3 style={{ textAlign: "center" }} >
                    <i className="bi bi-person"></i>  Welcome Back! {data.name}</h3>
                <div className="row mx-2 p-1">
                    <div className="col-2">
                        <label for="name" className="col-form-label">Admin Name:  </label>
                    </div>
                    <div className="col-3">
                        {data.name}
                    </div>
                </div>

                <div className="row mx-2 p-1">
                    <div className="col-2">
                        <label for="email" className="col-form-label">Admin Email: </label>
                    </div>
                    <div className="col-3">
                        {data.email}
                    </div>
                </div>

                <div className="row mx-2 p-1">
                    <div className="col-2">
                        <label for="phone" className="col-form-label">Admin Phone: </label>
                    </div>
                    <div className="col-3">
                        {data.phone}
                    </div>
                </div>


              




            </body>
        </>
    )
}
export default Admin