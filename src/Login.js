import { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";


function Login() {
    const [usuario, setUsuario] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const loginUsuario = () => {
        const usuario = {
            email,
            password,
        }
        fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                setUsuario(res.usuario);
            });
    };
    const introEmail = (e) => {
        setEmail(e.target.value);
    }
    const introPassword = (e) => {
        setPassword(e.target.value);
    }

    if (usuario.tipo === "empresa") {
        return <Redirect to="/DatosEmpresa" />
    } else if (usuario.tipo === "candidato") {
        return <Redirect to="/DatosCandidato" />
    } else {
        return (
            <div>
                <h1>Inicia sesión</h1>
                <label for="email">Email</label>
                <input type="text" value={email} onChange={introEmail} />
                <label for="password">Contraseña</label>
                <input type="text" value={password} onChange={introPassword} />
                <button onClick={loginUsuario}>Iniciar sesión</button>
            </div>

        )
    }


}

export default Login;