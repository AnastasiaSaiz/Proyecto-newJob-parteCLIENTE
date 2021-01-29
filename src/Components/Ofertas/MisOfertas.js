import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MisOfertas = (props) => {
    const [oferta, setOferta] = useState([]);
    
    useEffect(() => {
        fetch("/trabajo/users/"+props.usuario.nombre)
            .then((res) => res.json())
            .then((res) => {
                setOferta(res)
            });
    }, []);
    const verMisOfertas = oferta.map(oferta => {
        return (<ul>
            <li>{oferta.nombre}</li>
            <li>{oferta.empresa}</li>
           <li>{oferta.ubicacion}</li> 
          <li>{oferta.experiencia}</li>  

           <li><Link to={`/ofertas/${oferta._id}`}>Detalle Oferta</Link></li>
           </ul>)
    })
    return verMisOfertas;
}

export default MisOfertas;