import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { propTypes } from "react-bootstrap/esm/Image";

function DetalleOfertaEmpresa(props) {
    const { id } = useParams();
    const [oferta, setOferta] = useState([]);

    useEffect(() => {
        fetch(`/ofertas/${id}`).then((res) => res.json()).then((res) => {
            setOferta(res);
            console.log(res);
        })
    }, [])

    const verCandidatos = (props) => {
        console.log(props.usuario)
        const [candidato,setCandidato]= useState([]);
        useEffect(()=>{
            Promise.all(props.candidatos.map(url=>fetch(url))).then(respuesta=>Promise.all(respuesta.map(res=>res.json()))).yhe(res=>{
                setCandidato(res);
            });

        },[props.candidatos])


        const Residentes=(props)=>{
            const [data,setData]=useState([])
            useEffect(()=>{
          Promise.all(props.residents.map(url=>fetch(url))).then(respuesta=>Promise.all(respuesta.map(res=>res.json()))).then(res=>{
            setData(res);
          })
            },[props.residents])
          
            const personajes=data.map(personaje=>{
              return <p>{personaje.name}</p>
            })
            return<h>{personaje}</h>
          }

        fetch(`/ofertas/match/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({idUsuario:props.usuario._id})
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);


            });


    }

    const mostrarMiOferta = oferta.map(oferta => {
        return (<div>
            <p>Detalle Oferta</p>
            <p>Nombre: {oferta.nombre}</p>
            <p>Empresa: {oferta.empresa}</p>
            <p>Ubicación: {oferta.ubicacion}</p>
            <p>Remoto: {oferta.Remoto}</p>
            <button onClick={() => verCandidatos(props.usuario)}>Ver Candidatos</button>

        </div>)
    })
    return mostrarMiOferta;
}

export default DetalleOfertaEmpresa;