import { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";


function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const introEmail = (e) => {
        setEmail(e.target.value);
    }
    const introPassword = (e) => {
        setPassword(e.target.value);
    }

    if (props.usuario.tipo === "empresa") {
        return <Redirect to="/DatosEmpresa" />
    } else if (props.usuario.tipo === "candidato") {
        return <Redirect to="/DatosCandidato" />
    } else {
        return (
            <div>
                <h1>Inicia sesión</h1>
                <label for="email">Email</label>
                <input type="text" value={email} onChange={introEmail} />
                <label for="password">Contraseña</label>
                <input type="text" value={password} onChange={introPassword} />
                <button onClick={() => {
                    props.loginUsuario(email, password)
                }}>Iniciar sesión</button>
            </div>

        )
    }


}

export default Login;