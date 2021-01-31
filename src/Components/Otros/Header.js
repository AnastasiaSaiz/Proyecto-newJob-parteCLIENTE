import { useState } from "react"
import Login from "./Login";
import { Link, Redirect } from "react-router-dom";




function Header(props) {


    if (props.usuario.tipo === "empresa") {
        return (
            <div>
                <p>{props.usuario.nombre}</p>
                <Link to="/Header">Inicio</Link>
                <Link to="/Empresas">Ver mi perfil</Link>
                <Link to="/DatosEmpresa">Editar datos</Link>
                <Link to="/MisOfertas">Ver mis ofertas publicadas</Link>
                <Link to="/PublicarOferta">Publicar nueva oferta</Link>
                <Link to="/logOut">Cerrar sesión</Link>

            </div>
        )
    } else if (props.usuario.tipo === "candidato") {
        return (<div>
            <p>Hola {props.usuario.nombre}</p>
            <Link to="/Header">Inicio</Link>
            <Link to="/Candidatos/:email">Ver mi perfil</Link>
            <Link to="/DatosCandidato">Editar datos</Link>
            <Link to="/ofertas">Ver ofertas</Link>
            <Link to="/logOut">Cerrar sesión</Link>


        </div>
        )
    } else {
        return (<div>
            <Redirect to="/api/login" />
        </div>)
    }

}

export default Header;