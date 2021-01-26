import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PerfilCandidato = (props) => {
    const [usuario, setUsuario] = useState([]);
    useEffect(() => {
        fetch("/Candidatos/"+ props.usuario.email)
            .then((res) => res.json())
            .then((res) => {
                setUsuario(res)
            });
    }, []);

    const verPerfil = usuario.map(usuario => {
        return (<ul>
            <p>Datos Personales</p>
            <li><img src={usuario.foto}/></li>
            <li>Nombre: {usuario.nombre}</li>
            <li>Apellidos: {usuario.apellidos}</li>
            <li>Apellidos: {usuario.email}</li>
            <p>Datos Profesionales</p>
            <li>Rol: {usuario.rol}</li>
            <li>Experiencia: {usuario.experiencia}</li>
            <li>Habilidades: {usuario.habilidades}</li>
            <li>Localización de trabajo: {usuario.lugar}</li>
            <Link to="/DatosCandidato">Editar mi ficha técnica</Link>
            
        </ul>)
    })
    return verPerfil

}

export default PerfilCandidato;