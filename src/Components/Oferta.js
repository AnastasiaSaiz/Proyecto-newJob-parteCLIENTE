import { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Empresa from "./Empresas";

function Oferta(props) {
    const [registrado, setRegistrado] = useState(false);
    const [oferta, setOferta] = useState("");
    const [nombre, setNombre] = useState("");
    const [empresa, setEmpresa] = useState("");
    const [ubicacion, setUbicacion] = useState("");
    const [Remoto, setRemoto] = useState("");
    const [fechaPublicacion, setFechaPublicacion] = useState("");
    const [salario, setSalario] = useState("");
    const [experienciaMinima, setExperienciaMinima] = useState("");
    const [tipoContrato, setTipoContrato] = useState("");
    const [duracionContrato, setDuracionContrato] = useState("");
    const [estudios, setEstudios] = useState("");
    const [conocimientos, setConocimientos] = useState("");
    const [categoria, setCategoria] = useState("");

    const publicarOferta = () => {
        const oferta = {
            nombre,
            empresa:props.usuario.empresa,
            ubicacion,
            Remoto,
            fechaPublicacion,
            salario,
            experienciaMinima,
            tipoContrato,
            duracionContrato,
            estudios,
            conocimientos,
            categoria
        }

        fetch("/nuevaOferta", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(oferta)
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                setOferta(res.oferta);


            });
    };

    const registroNombre = (e) => {
        setNombre(e.target.value);
    }
    const registroEmpresa = (e) => {
        setEmpresa(e.target.value);
    }
    const registroUbicacion = (e) => {
        setUbicacion(e.target.value);
    }
    const registroRemoto = (e) => {
        setRemoto(e.target.value);
    }
    const registroFechaPublicacion = (e) => {
        setFechaPublicacion(e.target.value);
    }
    const registroSalario = (e) => {
        setSalario(e.target.value);
    }
    const registroExperienciaMinima = (e) => {
        setExperienciaMinima(e.target.value);
    }
    const registroTipoContrato = (e) => {
        setTipoContrato(e.target.value);
    }
    const registroDuracionContrato = (e) => {
        setDuracionContrato(e.target.value);
    }
    const registroEstudios = (e) => {
        setEstudios(e.target.value);
    }
    const registroConocimientos = (e) => {
        setConocimientos(e.target.value);
    }
    const registroCategoria = (e) => {
        setCategoria(e.target.value);
    }


    if(registrado){
        return <Redirect to="/DatosEmpresa" />
    } else {

    return (
        <div>
            <h1>Publica tu Oferta de trabajo</h1>
            <label for="nombre">Nombre</label>
            <input type="text" value={nombre} onChange={registroNombre} />
            <label for="apellidos">Empresa</label>
            <input type="text" value={Empresa} onChange={registroEmpresa} />
            <label for="email">ubicación</label>
            <input type="text" value={ubicacion} onChange={registroUbicacion} />
            <label for="password">Remoto</label>
            <input type="text" value={Remoto} onChange={registroRemoto} />
            <label for="password">Fecha publicación</label>
            <input type="text" value={fechaPublicacion} onChange={registroFechaPublicacion} />
            <label for="password">Salario</label>
            <input type="text" value={salario} onChange={registroSalario} />
            <label for="password">Experiencia mínima</label>
            <input type="text" value={experienciaMinima} onChange={registroExperienciaMinima} />
            <label for="password">Tipo contrato</label>
            <input type="text" value={tipoContrato} onChange={registroTipoContrato} />
            <label for="password">Duración contrato</label>
            <input type="text" value={duracionContrato} onChange={registroDuracionContrato} />
            <label for="password">Estudios requeridos</label>
            <input type="text" value={estudios} onChange={registroEstudios} />
            <label for="password">Conocimientos</label>
            <input type="text" value={conocimientos} onChange={registroConocimientos} />
            <label for="password">Categoría</label>
            <input type="text" value={categoria} onChange={registroCategoria} />
            <button onClick={publicarOferta}>Publicar oferta</button>
        </div>

    )
    }

}

export default Oferta;