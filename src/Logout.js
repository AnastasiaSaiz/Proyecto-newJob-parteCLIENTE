import { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";

function LogoutUsuario(props) {
    const [logueado, setLogueado] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const introEmail = (e) => {
        setEmail(e.target.value);
    }
    const introPassword = (e) => {
        setPassword(e.target.value);
    }


    if(props.logOut===true){
        return <Redirect to="/api/login"/>
    }else{
        return (
            <div>
                <h1>Sesisón cerrada</h1>
                <button onClick={() => {
                    props.logOut({})
                }}>Cerrar sesión</button>
            </div>

        )
    }
    


}

export default LogoutUsuario;