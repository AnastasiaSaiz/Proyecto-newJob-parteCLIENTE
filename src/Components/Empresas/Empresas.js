import { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";

function Empresa() {

    const [registrado, setRegistrado] = useState(false);

    const [empresa, setEmpresa] = useState([]);
    const [nombre, setNombre] = useState("");
    const [dsocial, setDsocial] = useState("");
    const [tamanyo, setTamanyo] = useState("");
    const [actividad, setActividad] = useState("");
    const [direccion, setDireccion] = useState("");
    const [poblacion, setPoblacion] = useState("");
    const [pais, setPais] = useState("");
    const [provincia, setProvincia] = useState("");
    const [cp, setCp] = useState("");
    const [telefono, setTelefono] = useState("");
    const [web, setWeb] = useState("");
    const [twitter, setTwitter] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [persona, setPersona] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registrarEmpresa = () => {
        const empresa = {
            nombre,
            dsocial,
            tamanyo,
            actividad,
            direccion,
            poblacion,
            pais,
            provincia,
            cp,
            telefono,
            web,
            twitter,
            descripcion,
            persona,
            email,
            password,
            tipo: "empresa"
        }
        fetch("/registro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(empresa)
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                setEmpresa(res.empresa);
                setRegistrado(res.registrado);
            });
    };



    const registroNombre = (e) => {
        setNombre(e.target.value);
    }
    const registroDsocial = (e) => {
        setDsocial(e.target.value);
    }
    const registroTamanyo = (e) => {
        setTamanyo(e.target.value);
    }
    const registroActividad = (e) => {
        setActividad(e.target.value);
    }
    const registroDireccion = (e) => {
        setDireccion(e.target.value);
    }
    const registroPoblacion = (e) => {
        setPoblacion(e.target.value);
    }
    const registroPais = (e) => {
        setPais(e.target.value);
    }
    const registroProvincia = (e) => {
        setProvincia(e.target.value);
    }
    const registroCp = (e) => {
        setCp(e.target.value);
    }
    const registroTelefono = (e) => {
        setTelefono(e.target.value);
    }
    const registroWeb = (e) => {
        setWeb(e.target.value);
    }
    const registroTwitter = (e) => {
        setTwitter(e.target.value);
    }
    const registroDescripcion = (e) => {
        setDescripcion(e.target.value);
    }
    const registroPersona = (e) => {
        setPersona(e.target.value);
    }
    const registroEmail = (e) => {
        setEmail(e.target.value);
    }
    const registroPassword = (e) => {
        setPassword(e.target.value);
    }

    

    return (
        <div>
            <h1>Regístrate como Empresa</h1>
            <Link to="/registroCandidato">Soy uncandidato</Link>
            <label for="nombre">Nombre de la Empresa *</label>
            <input type="text" value={nombre} onChange={registroNombre} />
            <label for="dsocial">Denominación social</label>
            <input type="text" value={dsocial} onChange={registroDsocial} />
            <label for="tamanyo">Tamaño de empresa *</label>
            <input type="text" value={tamanyo} onChange={registroTamanyo} />
            <label for="actividad">Actividad de empresa *</label>
            <input type="text" value={actividad} onChange={registroActividad} />
            <label for="direccion">Dirección *</label>
            <input type="text" value={direccion} onChange={registroDireccion} />
            <label for="poblacion">Población *</label>
            <input type="text" value={poblacion} onChange={registroPoblacion} />
            <label for="pais">País * </label>
            <input type="text" value={pais} onChange={registroPais} />
            <label for="provincia">Provincia * </label>
            <input type="text" value={provincia} onChange={registroProvincia} />
            <label for="cp">Código postal *</label>
            <input type="text" value={cp} onChange={registroCp} />
            <label for="telefono">Teléfono de empresa *</label>
            <input type="text" value={telefono} onChange={registroTelefono} />
            <label for="web">Página Web (URL) *</label>
            <input type="text" value={web} onChange={registroWeb} />
            <label for="twitter">Twitter (URL)</label>
            <input type="text" value={twitter} onChange={registroTwitter} />
            <label for="descripcion">Descripción de la Empresa</label>
            <input type="text" value={descripcion} onChange={registroDescripcion} />
            <label for="persona">Persona de contacto</label>
            <input type="text" value={persona} onChange={registroPersona} />
            <label for="email">Email</label>
            <input type="text" value={email} onChange={registroEmail} />
            <label for="password">Contraseña</label>
            <input type="text" value={password} onChange={registroPassword} />
            <button onClick={registrarEmpresa}>Crear mi cuenta</button>
        </div>

    )
    
}
export default Empresa;