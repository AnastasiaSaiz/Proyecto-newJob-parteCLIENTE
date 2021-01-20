import logo from './logo.svg';
import './App.css';
import Spinner from 'react-bootstrap/Spinner';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Candidatos from "./Candidatos";
import Empresa from "./Empresas";
import Login from "./Login";
import LogoutUsuario from "./Logout"
import FichaCandidato from "./FichaCandidato"; 
import FichaEmpresa from "./FichaEmpresa";
import { BrowserRouter, Route, Link } from "react-router-dom";



function App() {
  const [usuario, setUsuario] = useState([]);
  const loginUsuario = (email, password) => {
    const usuario = {
      email,
      password,
    }
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(usuario)
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setUsuario(res.usuario);
      });
  };

  function logOut () {
    setUsuario({})
  }

  return (

    <BrowserRouter>
      <Link to="/registroCandidato">Registrarse como candidato</Link>
      <Route exact path="/registroCandidato">
        <Candidatos />
      </Route>
      <Route exact path="/registroEmpresa">
        <Empresa />
      </Route>
      <Link to="/api/login">Iniciar sesión</Link>
      <Route exact path="/api/login">
        <Login loginUsuario={loginUsuario} usuario={usuario} />
      </Route>
      <Link to="/DatosCandidato"> Editar ficha candidato </Link>
      <Route exact path ="/DatosCandidato"> 
        <FichaCandidato usuario={usuario}/>
      </Route>
      <Link to="/DatosEmpresa"> Editar ficha Empresa</Link>
      <Route exact path ="/DatosEmpresa">
        <FichaEmpresa usuario={usuario}/>
      </Route>
      <Link to="/logOut">Cerrar sesión</Link>
      <Route exact path="/logOut">
        <LogoutUsuario logOut={logOut} usuario={usuario}/>
      </Route>
    </BrowserRouter>

  )




}


export default App;
