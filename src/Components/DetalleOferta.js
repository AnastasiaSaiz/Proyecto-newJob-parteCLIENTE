import {useParams} from "react-router-dom";
import{useEffect,useState} from "react";
import { propTypes } from "react-bootstrap/esm/Image";

function DetalleOferta (){
    const{id}=useParams();
    const [oferta,setOferta]=useState([]);

    useEffect(()=>{
fetch(`/ofertas/${id}`).then((res)=>res.json()).then((res)=>{
    setOferta(res);
    console.log(res);
})
    },[])
    return( <div>
        <p>Detalle Oferta</p>
        <p>Nombre: {id.nombre}</p>
        <p>Ubicación: {oferta.ubicacion}</p>
        <p>Remoto: {oferta.Remoto}</p>


    </div>)
}

export default DetalleOferta;
