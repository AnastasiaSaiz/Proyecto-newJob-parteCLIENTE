import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import PerfilCandidato from "../PerfilCandidato/PerfilCandidato";

function DetalleOfertaEmpresa(props) {
    const { id } = useParams();
    const [oferta, setOferta] = useState([]);
    const [verusuario, setVerusuario] = useState(false);



    useEffect(() => {
        fetch(`/ofertas/${id}`).then((res) => res.json()).then((res) => {
            setOferta(res);
            console.log(res);
        })

    }, [])

    function verPerfil() {
        setVerusuario(!verusuario)
    }

    const mostrarOferta = oferta.map(oferta => {
        return (<div>
            <p>Detalle Oferta</p>
            <p>Nombre: {oferta.nombre}</p>
            <p>Empresa: {oferta.empresa}</p>
            <p>Ubicación: {oferta.ubicacion}</p>
            <p>Remoto: {oferta.Remoto}</p>
            <button onClick={verPerfil}>Ver candidatos</button>

        </div>)
    })
    if (verusuario) {
        return (<>{mostrarOferta}
            <VerCandidatos oferta={oferta} />
        </>)
    }
    return (
        <>{mostrarOferta}
        </>

    );
}

const VerCandidatos = (props) => {
    const [data, setData] = useState([]);


    useEffect(() => {
        const array = []
        for (let i = 0; i < props.oferta[0].candidato.length; i++) {
            array.push("/ofertas/arrayusuarios/" + props.oferta[0].candidato[i])
        } console.log(array);
        Promise.all(array.map(url => fetch(url))).then(responses => Promise.all(responses.map(res => res.json()))).then((res) => {
            setData(res);
            console.log(res);
        })
    }, [])

    const personas = data.map(data => {
        return <p>Nombre: {data[0].nombre}</p>
    })
    return (<div>
        <h>{personas}</h>
    </div>)
}

/*const infoCandidato = (props) => {

    const [perfil, setPerfil] = useState([]);

    useEffect(() => {
        fetch(props.url).then(res => res.json()).then(res => {
            console.log(res)
            setPerfil((res.perfil))
        })
    }, [props.url])

    return <div><PerfilCandidato />
    </div>

}*/

export default DetalleOfertaEmpresa;