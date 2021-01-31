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
            <div className="login-page">
                <div className="login">
                    <h1 className="login-title">Inicia sesión</h1>
                    <div className="login-form">
                        <div className="input-email">
                            <label for="email"></label>
                            <i class="fas fa-envelope icon"></i>
                            <input type="email" value={email} onChange={introEmail} placeholder="Email" required />
                        </div>
                        <div className="input-password">
                            <label for="pwd"></label>
                            <i class="fas fa-lock icon"></i>
                            <input type="password" value={password} onChange={introPassword} placeholder="Contraseña" required />
                        </div>
                        <button className="buttonsubmit" onClick={() => {
                            props.loginUsuario(email, password)
                        }} placeholder="sesion">Iniciar sesión</button>

                    </div>
                    <div className="Link">
                        <Link to="/registroCandidato">Quiero registrarme</Link>
                    </div>

                </div>
                <div class="background">
                    <h1>Encuentra tu trabajo Tech</h1>
                    <p>"Que algo no haya salido como hayas querido no significa que sea inútil".Thomas Edison.</p>
                </div>


            </div>

        )
    }


}

export default Login;