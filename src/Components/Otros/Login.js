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
        return <Redirect to="/Header" />
    } else if (props.usuario.tipo === "candidato") {
        return <Redirect to="/Header" />
    } else {
        return (
            <div className="Login-form">
                <div className="Block glass">
                    <div className="Input">
                    <h1>Inicia sesión</h1>
                    <label for="email">Email</label>
                    <input type="text" value={email} onChange={introEmail} />
                    <label for="pwd">Contraseña</label>
                    <input type="password" value={password} onChange={introPassword} />
                    <button onClick={() => {
                        props.loginUsuario(email, password)
                    }}>Iniciar sesión</button>
                    <Link to="/registroCandidato">Quiero registrarme</Link>
                    </div>
                </div>
                
            </div>

        )
    }


}

export default Login;