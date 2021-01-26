import { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";

function EditarFicha(props) {
    const [estado, setEstado] = useState([]);

    const [registrado, setRegistrado] = useState(false);
    const [candidato, setCandidato] = useState([]);
    const [email, setEmail] = useState("");
    const [experiencia, setExperiencia] = useState(props.usuario.experiencia);
    const [lugar, setLugar] = useState(props.usuario.lugar.checked);
    const [rol, setRol] = useState(props.usuario.checked);
    const [habilidades, setHabilidades] = useState(props.usuario.habilidades);


    const editarFichacandidato = () => {
        console.log(props.usuario)
        const candidato = {

            email: props.usuario.email,
            experiencia,
            lugar,
            rol,
            habilidades
        }

        fetch("/editarcandidato", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(candidato)
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);


            });
    }



    const registroExperiencia = (e) => {
        setExperiencia(e.target.value);
    }
  
    
    const registroLugar = (e) => {
        if (e.target.checked) {
            const newArray = [...lugar, e.target.value];
            setLugar(newArray);
        } else if (e.target.checked === false) {
            const newArray = lugar.filter((lugar) => {
                if (lugar !== e.target.value) {
                    return lugar;
                }
            });
            setLugar(newArray);
        }
    };
    console.log(lugar);

    const registroRol = (e) => {
        if (e.target.checked) {
            const newArray = [...rol, e.target.value];
            setRol(newArray);
        } else if (e.target.checked === false) {
            const newArray = rol.filter((rol) => {
                if (rol !== e.target.value) {
                    return rol;
                }
            });
            setRol(newArray);
        }
    };
    console.log(rol);

    const registroHabilidades = (e) => {
        if (e.target.checked) {
            const newArray = [...habilidades, e.target.value];
            setHabilidades(newArray);
        } else if (e.target.checked === false) {
            const newArray = habilidades.filter((habilidades) => {
                if (habilidades !== e.target.value) {
                    return habilidades;
                }
            });
            setHabilidades(newArray);
        }
    };
    console.log(habilidades);

    const manejarCheck = (e) => {
        if (e.target.checked) {
            const newArray = [...estado, e.target.value];
            setEstado(newArray);
        } else if (e.target.checked === false) {
            const newArray = estado.filter((estado) => {
                if (estado !== e.target.value) {
                    return estado;
                }
            });
            setEstado(newArray);
        }
    };
    console.log(estado);

    return (
        <div>
            <h1>Añadir más datos</h1>
            <label for="experiencia">Experiencia</label>
            <input type="text" value={experiencia} onChange={registroExperiencia} />
            <label for="lugar">¿Dónde te gustaría trabajar?</label>
            <label><input type="checkbox" value="Remoto" onChange={registroLugar} />Remoto</label>
            <label><input type="checkbox" value="Barcelona" onChange={registroLugar} />Barcelona</label>
            <label><input type="checkbox" value="Madrid" onChange={registroLugar} />Madrid</label>
            <label><input type="checkbox" value="Barcelona" onChange={registroLugar} />Barcelona</label>
            <label><input type="checkbox" value="Valencia" onChange={registroLugar} />Valencia</label>
            <label><input type="checkbox" value="Sevilla" onChange={registroLugar} />Sevilla</label>
            <label><input type="checkbox" value="Zaragoza" onChange={registroLugar} />Zaragoza</label>
            <label><input type="checkbox" value="Malaga" onChange={registroLugar} />Málaga</label>
            <label><input type="checkbox" value="Murcia" onChange={registroLugar} />Múrcia</label>
            <label><input type="checkbox" value="Mallorca" onChange={registroLugar} />Palma de Mallorca</label>
            <label><input type="checkbox" value="Canarias" onChange={registroLugar} />Las Palmas de Gran Canaria</label>
            <label><input type="checkbox" value="Bilbao" onChange={registroLugar} />Bilbao</label>

            <label for="rol">Indica tú Rol (puedes seleccionar más de uno)</label>
            <label><input type="checkbox" value="Administrador de Sistemas" onChange={registroRol} />Administrador de Sistemas</label>
            <label><input type="checkbox" value="Gerente" onChange={registroRol} />Gerente</label>
            <label><input type="checkbox" value="Backend" onChange={registroRol} />Backend</label>
            <label><input type="checkbox" value="Blockchain" onChange={registroRol} />Blockchain</label>
            <label><input type="checkbox" value="Administrador de BBDD" onChange={registroRol} />Administrador de BBDD</label>
            <label><input type="checkbox" value="Frontend" onChange={registroRol} />Frontend</label>
            <label><input type="checkbox" value="BigData" onChange={registroRol} />Big Data</label>
            <label><input type="checkbox" value="FullStack" onChange={registroRol} />FullStack</label>
            <label><input type="checkbox" value="BI" onChange={registroRol} />BI</label>

            <label for="habilidades">¿Cuáles son tus principales habilidades?</label>
            <label><input type="checkbox" value="React" onChange={registroHabilidades} />React</label>
            <label><input type="checkbox" value="JavaScript" onChange={registroHabilidades} />JS</label>

            <button onClick={editarFichacandidato}>guardar datos</button>
        </div>
    );
}

export default EditarFicha;

