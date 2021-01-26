import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Ofertas = (props) => {
    const [oferta, setOferta] = useState([]);
    useEffect(() => {
        fetch("/ofertas")
            .then((res) => res.json())
            .then((res) => {
                setOferta(res)
            });
    }, []);
    const verOferta = oferta.map(oferta => {
        return (<ul>
            <li>{oferta.nombre}</li>
           <li>{oferta.ubicacion}</li> 
          <li>{oferta.experiencia}</li>  

           <li><Link to={`/ofertas/${oferta._id}`}>Detalle Oferta</Link></li>
           </ul>)
    })
    return verOferta
    
}

export default Ofertas;