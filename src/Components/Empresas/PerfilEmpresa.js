import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PerfilEmpresa = (props) => {
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
            <p>Datos Empresariales</p>
            <li>Nombre: {usuario.nombre}</li>
            <li>Dominio Social: {usuario.dsocial}</li>
            <li>Tamaño: {usuario.tamanyo}</li>
            <li>Actividad: {usuario.actividad}</li>
            <li>Dirección: {usuario.direccion}</li>
            <li>Provincia: {usuario.provincia}</li>
            <li>CP: {usuario.cp}</li>
            <li>Teléfono: {usuario.telefono}</li>
            <li>Email: {usuario.email}</li>
            <li>Persona de contacto: {usuario.persona}</li>
            <li>Web: {usuario.web}</li>
            <li>Twitter: {usuario.twitter}</li>
            <li>Descripción de la empresa: {usuario.descripcion}</li>
            <Link to="/DatosEmpresa">Editar datos</Link>
            
        </ul>)
    })
    return verPerfil

}
export default PerfilEmpresa;