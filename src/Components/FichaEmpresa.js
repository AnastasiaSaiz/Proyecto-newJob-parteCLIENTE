import { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";

function FichaEmpresa(props) {

    const [registrado, setRegistrado] = useState(false);
    const [candidato, setCandidato] = useState([]);
    const [empresas, setEmpresas] = useState([]);
    const [nombre, setNombre] = useState(props.usuario.nombre);
    const [dsocial, setDsocial] = useState(props.usuario.dsocial);
    const [tamanyo, setTamanyo] = useState(props.usuario.tamanyo);
    const [actividad, setActividad] = useState(props.usuario.actividad);
    const [direccion, setDireccion] = useState(props.usuario.direccion);
    const [poblacion, setPoblacion] = useState(props.usuario.poblacion);
    const [pais, setPais] = useState(props.usuario.pais);
    const [provincia, setProvincia] = useState(props.usuario.provincia);
    const [cp, setCp] = useState(props.usuario.cp);
    const [telefono, setTelefono] = useState(props.usuario.telefono);
    const [web, setWeb] = useState(props.usuario.web);
    const [twitter, setTwitter] = useState(props.usuario.twitter);
    const [descripcion, setDescripcion] = useState(props.usuario.descripcion);
    const [persona, setPersona] = useState(props.usuario.persona);

    
    const [password, setPassword] = useState("");


    const modificarDatos = () => {
        console.log(props.usuario)
        const empresa = {

            email: props.usuario.email,
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
            password,
            tipo: "empresa"
        }

        fetch("/editarempresa", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(empresa)
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);


            });
    }



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
    
    const registroPassword = (e) => {
        setPassword(e.target.value);
    }

    if(registrado){
        return <Redirect to="/DatosEmpresa" />
    } else {
    return (
        <div>
            <h1>Modificar datos de la empresa</h1>
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
            
            <label for="password">Contraseña</label>
            <input type="text" value={password} onChange={registroPassword} />
            <button onClick={modificarDatos}>Guardar datos nuevos</button>
        </div>

    );
    }
}

export default FichaEmpresa;

