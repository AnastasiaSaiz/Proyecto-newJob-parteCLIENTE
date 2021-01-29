import { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";

function EditarFicha(props) {
    const [estado, setEstado] = useState([]);

    const [registrado, setRegistrado] = useState(false);
    const [candidato, setCandidato] = useState([]);
    const [email, setEmail] = useState("");
    const [experiencia, setExperiencia] = useState(props.usuario.experiencia);
    const [lugar, setLugar] = useState(props.usuario.lugar);
    const [rol, setRol] = useState(props.usuario.rol);
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
            <label><input type="checkbox" value="Programdor Web" onChange={registroRol} />Programdor Web</label>
            <label><input type="checkbox" value="Back-end" onChange={registroRol} />Back-end</label>
            <label><input type="checkbox" value="Front-end" onChange={registroRol} />Front-end</label>
            <label><input type="checkbox" value="Fullstack" onChange={registroRol} />Fullstack</label>
            <label><input type="checkbox" value="Analista-Programador" onChange={registroRol} />Analista-Programador</label>
            <label><input type="checkbox" value="DevOps" onChange={registroRol} />DevOps</label>
            <label><input type="checkbox" value="Webmaster" onChange={registroRol} />Webmaster</label>
            <label><input type="checkbox" value="Gestor de contenidos" onChange={registroRol} />Gestor de contenidos</label>
            <label><input type="checkbox" value="UX/UI" onChange={registroRol} />UX/UI</label>
            <label><input type="checkbox" value="Diseño Web/Grafico" onChange={registroRol} />Diseño Web/Grafico</label>
            <label><input type="checkbox" value="SEO/SEM" onChange={registroRol} />SEO/SEM</label>
            <br />
            <label><input type="checkbox" value="Analista de Negocios" onChange={registroRol} />Analista de Negocios</label>
            <label><input type="checkbox" value="Analista funcional" onChange={registroRol} />Analista funcional</label>
            <label><input type="checkbox" value="Analista de Procesos" onChange={registroRol} />Analista de Procesos</label>
            <label><input type="checkbox" value="Arquitecto Sistemas" onChange={registroRol} />Arquitecto Sistemas</label>
            <label><input type="checkbox" value="Tecnico de Sistemas" onChange={registroRol} />Tecnico de Sistemas</label>
            <br/>
            <label><input type="checkbox" value="QA Tester" onChange={registroRol} />QA Tester</label>
            <label><input type="checkbox" value="Auditor" onChange={registroRol} />Auditor</label>
            <br/>
            <label><input type="checkbox" value="Big Data" onChange={registroRol} />Big Data</label>
            <label><input type="checkbox" value="Data Analyst" onChange={registroRol} />Data Analyst</label>
            <label><input type="checkbox" value="Data Scientist" onChange={registroRol} />Data Scientist</label>
            <label><input type="checkbox" value="Arquitecto Base de Datos" onChange={registroRol} />Arquitecto Base de Datos</label>
            <label><input type="checkbox" value="Programador BBDD" onChange={registroRol} />Programador BBDD</label>
            <label><input type="checkbox" value="Admin. BBDD" onChange={registroRol} />Admin. BBDD</label>
            <br/>
            <label><input type="checkbox" value="Agile Coach" onChange={registroRol} />Agile Coach</label>
            <label><input type="checkbox" value="Jefe de Proyecto" onChange={registroRol} />Jefe de Proyecto</label>
            <label><input type="checkbox" value="Scrum Master" onChange={registroRol} />Scrum Master</label>



















            <label for="habilidades">¿Cuáles son tus principales habilidades?</label>
            <label><input type="checkbox" value="React" onChange={registroHabilidades} />React</label>
            <label><input type="checkbox" value="JavaScript" onChange={registroHabilidades} />JS</label>

            <button onClick={editarFichacandidato}>guardar datos</button>
        </div>
    );
}

export default EditarFicha;

