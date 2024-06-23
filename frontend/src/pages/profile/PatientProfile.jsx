import { useEffect, useState } from "react"
import Headerbar from "../../Components/Headerbar"
import { useNavigate } from "react-router-dom"

function PatientProfile(props) {
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
            {JSON.stringify(data)}
            <h3>{data.name}</h3>
        </>
    )
}
export default PatientProfile