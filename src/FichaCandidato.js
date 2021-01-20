import { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";

function EditarFicha(props) {

    const [registrado, setRegistrado] = useState(false);
    const [candidato, setCandidato] = useState([]);
    const [email, setEmail] = useState("");
    const [experiencia, setExperiencia] = useState("");
    const [lugar, setLugar] = useState("");
    const [rol, setRol] = useState("");
    const [habilidades, setHabilidades] = useState("");


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
        setLugar(e.target.value);
    }
    const registroRol = (e) => {
        setRol(e.target.value);
    }
    const registroHabilidades = (e) => {
        setHabilidades(e.target.value);
    }

    return (
        <div>
            <h1>Añadir más datos</h1>
            <label for="experiencia">Experiencia</label>
            <input type="text" value={experiencia} onChange={registroExperiencia} />
            <label for="lugar">Lugar</label>
            <input type="text" value={lugar} onChange={registroLugar} />
            <label for="rol">Rol</label>
            <input type="text" value={rol} onChange={registroRol} />
            <label for="habilidades">habilidades</label>
            <input type="text" value={habilidades} onChange={registroHabilidades} />
            <button onClick={editarFichacandidato}>guardar datos</button>
        </div>
    );
}

export default EditarFicha;

