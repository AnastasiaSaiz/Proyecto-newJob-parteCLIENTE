import { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";

function LogoutUsuario(props) {

    if (props.logueado === false) {
        return <Redirect to="/api/login" />
    } else {
        return (
            <div>
                <button onClick={() => {
                    props.logOut()
                }}>Cerrar sesión</button>
            </div>

        )
    }



}

export default LogoutUsuario;