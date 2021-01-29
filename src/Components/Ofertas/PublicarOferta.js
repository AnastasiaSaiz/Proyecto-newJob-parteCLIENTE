import { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import Empresa from "../Empresas/Empresas";

function Oferta(props) {
    const [registrado, setRegistrado] = useState(false);
    const [oferta, setOferta] = useState("");
    const [nombre, setNombre] = useState("");
    const [empresa, setEmpresa] = useState(props.usuario.nombre);
    const [ubicacion, setUbicacion] = useState("");
    const [Remoto, setRemoto] = useState("");
    const [fechaPublicacion, setFechaPublicacion] = useState("");
    const [salario, setSalario] = useState("");
    const [experienciaMinima, setExperienciaMinima] = useState("");
    const [tipoContrato, setTipoContrato] = useState("");
    const [duracionContrato, setDuracionContrato] = useState("");
    const [estudios, setEstudios] = useState("");
    const [conocimientos, setConocimientos] = useState("");
    const [categoria, setCategoria] = useState("");

    const publicarOferta = () => {
        console.log(props.usuario)
        const oferta = {
            nombre,
            empresa,
            ubicacion,
            Remoto,
            fechaPublicacion,
            salario,
            experienciaMinima,
            tipoContrato,
            duracionContrato,
            estudios,
            conocimientos,
            categoria
        }

        fetch("/nuevaOferta", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(oferta)
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                setOferta(res.oferta);
                setRegistrado(res.registrado);


            });
    };

    const registroNombre = (e) => {
        setNombre(e.target.value);
    }
    const registroEmpresa = (e) => {
        setEmpresa(e.target.value);
    }


    const registroUbicacion = (e) => {
        if (e.target.checked) {
            const newArray = [...ubicacion, e.target.value];
            setUbicacion(newArray);
        } else if (e.target.checked === false) {
            const newArray = ubicacion.filter((ubicacion) => {
                if (ubicacion !== e.target.value) {
                    return ubicacion;
                }
            });
            setUbicacion(newArray);
        }
    };
    console.log(ubicacion);

    
    const registroRemoto = (e) => {
        if (e.target.checked) {
            const newArray = [...Remoto, e.target.value];
            setRemoto(newArray);
        } else if (e.target.checked === false) {
            const newArray = Remoto.filter((Remoto) => {
                if (Remoto !== e.target.value) {
                    return Remoto;
                }
            });
            setRemoto(newArray);
        }
    };
    console.log(Remoto);



    const registroFechaPublicacion = (e) => {
        setFechaPublicacion(e.target.value);
    }

    const registroSalario = (e) => {
        if (e.target.checked) {
            const newArray = [...salario, e.target.value];
            setSalario(newArray);
        } else if (e.target.checked === false) {
            const newArray = salario.filter((salario) => {
                if (salario !== e.target.value) {
                    return salario;
                }
            });
            setSalario(newArray);
        }
    };
    console.log(salario);



    const registroExperienciaMinima = (e) => {
        if (e.target.checked) {
            const newArray = [...experienciaMinima, e.target.value];
            setExperienciaMinima(newArray);
        } else if (e.target.checked === false) {
            const newArray = experienciaMinima.filter((experienciaMinima) => {
                if (experienciaMinima !== e.target.value) {
                    return experienciaMinima;
                }
            });
            setExperienciaMinima(newArray);
        }
    };
    console.log(experienciaMinima);





    const registroTipoContrato = (e) => {
        if (e.target.checked) {
            const newArray = [...tipoContrato, e.target.value];
            setTipoContrato(newArray);
        } else if (e.target.checked === false) {
            const newArray = tipoContrato.filter((tipoContrato) => {
                if (tipoContrato !== e.target.value) {
                    return tipoContrato;
                }
            });
            setTipoContrato(newArray);
        }
    };
    console.log(tipoContrato);


    
    
    const registroEstudios = (e) => {
        if (e.target.checked) {
            const newArray = [...estudios, e.target.value];
            setEstudios(newArray);
        } else if (e.target.checked === false) {
            const newArray = estudios.filter((estudios) => {
                if (estudios !== e.target.value) {
                    return estudios;
                }
            });
            setEstudios(newArray);
        }
    };
    console.log(estudios);

    const registroConocimientos = (e) => {
        setConocimientos(e.target.value);
    }
    const registroCategoria = (e) => {
        setCategoria(e.target.value);
    }



    if (registrado) {
        return <Redirect to="/DatosEmpresa" />
    } else {

        return (
            <div>
                <h1>Publica tu Oferta de trabajo</h1>
                <label for="nombre">Nombre</label>
                <input type="text" value={nombre} onChange={registroNombre} />


                <label for="ubicacion">Ubicación de la vacante</label>
                <label><input type="checkbox" value="Remoto" onChange={registroUbicacion} />Remoto</label>
                <label><input type="checkbox" value="Barcelona" onChange={registroUbicacion} />Barcelona</label>
                <label><input type="checkbox" value="Madrid" onChange={registroUbicacion} />Madrid</label>
                <label><input type="checkbox" value="Valencia" onChange={registroUbicacion} />Valencia</label>
                <label><input type="checkbox" value="Sevilla" onChange={registroUbicacion} />Sevilla</label>
                <label><input type="checkbox" value="Zaragoza" onChange={registroUbicacion} />Zaragoza</label>
                <label><input type="checkbox" value="Malaga" onChange={registroUbicacion} />Málaga</label>
                <label><input type="checkbox" value="Murcia" onChange={registroUbicacion} />Múrcia</label>
                <label><input type="checkbox" value="Mallorca" onChange={registroUbicacion} />Palma de Mallorca</label>
                <label><input type="checkbox" value="Canarias" onChange={registroUbicacion} />Las Palmas de Gran Canaria</label>
                <label><input type="checkbox" value="Bilbao" onChange={registroUbicacion} />Bilbao</label>

                <label for="Remoto">Remoto</label>
                <label><input type="checkbox" value="Si" onChange={registroRemoto} />Si</label>
                <label><input type="checkbox" value="No" onChange={registroRemoto} />No</label>
                <label><input type="checkbox" value="Es posible" onChange={registroRemoto} />Es posible</label>


                <label for="fechaPublicacion">Fecha publicación</label>
                <input type="text" value={fechaPublicacion} onChange={registroFechaPublicacion} />


                <label for="salario">Salario</label>
                <label><input type="checkbox" value="18.000-22.000" onChange={registroSalario} />[18.000-22.000]</label>
                <label><input type="checkbox" value="23.000-26.000" onChange={registroSalario} />[23.000-26.000]</label>
                <label><input type="checkbox" value="27.000-30.000" onChange={registroSalario} />[27.000-30.000]</label>
                <label><input type="checkbox" value="31.000-35.000" onChange={registroSalario} />[31.000-35.000]</label>
                <label><input type="checkbox" value="36.000-40.000" onChange={registroSalario} />[36.000-40.000]</label>
                <label><input type="checkbox" value="+40.000" onChange={registroSalario} />[+40.000]</label>


                <label for="experienciaMinima">Experiencia mínima</label>
                <label><input type="checkbox" value="<6meses" onChange={registroExperienciaMinima} />[-6 meses]</label>
                <label><input type="checkbox" value="6meses- 2ños" onChange={registroExperienciaMinima} />[6 meses - 2 años]</label>
                <label><input type="checkbox" value="2-5 años" onChange={registroExperienciaMinima} />[2-5 años]</label>
                <label><input type="checkbox" value="5-10años" onChange={registroExperienciaMinima} />[5-10 años]</label>
                <label><input type="checkbox" value=">10años" onChange={registroExperienciaMinima} /> [+10años]</label>


                <label for="tipoContrato">Tipo contrato</label>
                <label><input type="checkbox" value=">Duración indefinida" onChange={registroTipoContrato} /> Indefinido</label>
                <label><input type="checkbox" value=">Freelance/Consultor" onChange={registroTipoContrato} /> Freelance/Consultor</label>
                <label><input type="checkbox" value=">Duración determinada" onChange={registroTipoContrato} /> Duración determinada</label>
                <label><input type="checkbox" value=">Prácticas/Becario/a" onChange={registroTipoContrato} /> Prácticas/Becario/a</label>


                <label for="estudios">Nivel de estudios</label>
                <label><input type="checkbox" value="Secundaria" onChange={registroEstudios} />Secundaria</label>
                <label><input type="checkbox" value="FP I y/o II" onChange={registroEstudios} />FP I y/o II</label>
                <label><input type="checkbox" value="Diplomatura/Grado" onChange={registroEstudios} />Diplomatura/Grado</label>
                <label><input type="checkbox" value="Máster" onChange={registroEstudios} />Máster</label>
                <label><input type="checkbox" value="Doctorado" onChange={registroEstudios} />Doctorado</label>



                <label for="conocimientos">Conocimientos</label>
                <input type="text" value={conocimientos} onChange={registroConocimientos} />
                <label for="categoria">Categoría</label>
                <input type="text" value={categoria} onChange={registroCategoria} />
                <button onClick={publicarOferta}>Publicar oferta</button>
            </div>

        )
    }

}

export default Oferta;