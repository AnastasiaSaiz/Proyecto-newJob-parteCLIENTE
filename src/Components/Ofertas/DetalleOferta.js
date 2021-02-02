import { Redirect, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";

function DetalleOferta(props) {
    const { id } = useParams();
    const [oferta, setOferta] = useState([]);

    useEffect(() => {
        fetch(`/ofertas/${id}`).then((res) => res.json()).then((res) => {
            setOferta(res);
            console.log(res);
        })
    }, [])

    const postular = () => {
        console.log(props.usuario)
        const candidato = {
            idUsuario: props.usuario._id,
        }
        fetch(`/ofertas/match/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ idUsuario: props.usuario._id })
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);


            });


    }


    const mostrarOferta = oferta.map(oferta => {
        if (props.usuario.tipo === "candidato") {
            return (<div>
                <p>Detalle Oferta</p>
                <p>Nombre: {oferta.nombre}</p>
                <p>Empresa: {oferta.empresa}</p>
                <p>Ubicación: {oferta.ubicacion}</p>
                <p>Remoto: {oferta.Remoto}</p>
                <button onClick={() => postular(props.usuario)}>postular</button>

            </div>)
        } else if (props.usuario.tipo === "empresa") {
            return <div>
                <Redirect to="/ofertas/:id" />
            </div>
        } else {
            return (<div>
                <Redirect to="/api/login" />
            </div>)
        }
    })
    return mostrarOferta;
}

export default DetalleOferta;
