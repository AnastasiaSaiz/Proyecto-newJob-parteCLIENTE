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


    if(registrado){
        return <Redirect to="/DatosCandidato" />
    } else {

        return (
            <div className="registro-candidato">
                <h1>Regístrate como candidato</h1>
                <Link to="/registroEmpresa">Soy una empresa</Link>
                <label for="nombre">Nombre</label>
                <input type="text" value={nombre} onChange={registroNombre} />
                <label for="apellidos">Apellidos</label>
                <input type="text" value={apellidos} onChange={registroApellidos} />
                <label for="email">Email</label>
                <input type="text" value={email} onChange={registroEmail} />
                <label for="password">Contraseña</label>
                <input type="text" value={password} onChange={registroPassword} />
                <button onClick={registrarCandidato}>Crear mi cuenta</button>
            </div>

        )
        }

}

export default Candidatos;