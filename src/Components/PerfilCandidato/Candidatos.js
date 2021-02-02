import { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";

function Candidatos() {
    const [registrado, setRegistrado] = useState(false);
    const [candidato, setCandidato] = useState([]);
    const [nombre, setNombre] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registrarCandidato = () => {
        const candidato = {
            nombre,
            apellidos,
            email,
            password,
            tipo: "candidato"
        }

        fetch("/registro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(candidato)
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                setCandidato(res.candidato);
                setRegistrado(res.registrado);

            });
    };

    const registroNombre = (e) => {
        setNombre(e.target.value);
    }
    const registroApellidos = (e) => {
        setApellidos(e.target.value);
    }
    const registroEmail = (e) => {
        setEmail(e.target.value);
    }
    const registroPassword = (e) => {
        setPassword(e.target.value);
    }


    if (registrado) {
        return <Redirect to="/DatosCandidato" />
    } else {

        return (
            <div className="container">
                <div className="image"></div>
                <div className="form-sign-in">
                    <div className="frm">
                        <h1>Regístrate como candidato</h1>
                        <h2>¿Nuevo aquí?</h2>
                        <p>¡Regístrate y descure nuevas oportunidades laborales!</p>
                        <Link to="/registroEmpresa">Soy una empresa</Link>
                        <div className="form-control">
                        <input type="text" placeholder="Nombre" value={nombre} onChange={registroNombre} />
                        <input type="text" value={apellidos} placeholder="Apellidos" onChange={registroApellidos} />
                        <input type="text" value={email} onChange={registroEmail} placeholder="Email" />
                        <input type="text" value={password} onChange={registroPassword} placeholder="Contraseña" />
                        </div>
                        <button onClick={registrarCandidato}>Crear mi cuenta</button>
                        <div>
                            <h1>¿Tienes cuenta?</h1>
                            <Link to="/api/login">Inicia sesión</Link>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

export default Candidatos;