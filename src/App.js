import logo from './logo.svg';
import './App.css';
import Spinner from 'react-bootstrap/Spinner';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Candidatos from "./Components/PerfilCandidato/Candidatos";
import Empresa from "./Components/Empresas";
import Login from "./Components/Login";
import LogoutUsuario from "./Components/Logout"
import FichaCandidato from "./Components/PerfilCandidato/FichaCandidato";
import FichaEmpresa from "./Components/FichaEmpresa";
import Oferta from "./Components/PublicarOferta"
import Ofertas from "./Components/Ofertas";
import Header from "./Components/Header";
import DetalleOferta from "./Components/DetalleOferta";
import PerfilCandidato from "./Components/PerfilCandidato/PerfilCandidato";
import { BrowserRouter, Route, Link } from "react-router-dom";



function App() {
  const [perfil,setPerfil] = useState([]);
  const [oferta, setOferta] = useState([]);
  const [usuario, setUsuario] = useState([]);
  const [logueado, setLogueado] = useState(false);
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
        setLogueado(true);
      });
  };

  function logOut() {
    setUsuario({});
    setLogueado(false);
  }



  return (

    <BrowserRouter>
      <Header usuario={usuario}/>
     {/*<Link to="/registroCandidato">Registrarse como candidato</Link>*/}
      <Route exact path="/registroCandidato">
        <Candidatos />
      </Route>
      <Route exact path="/registroEmpresa">
        <Empresa />
      </Route>
      {/*<Link to="/api/login">Iniciar sesión</Link>*/}
      <Route exact path="/api/login">
        <Login loginUsuario={loginUsuario} usuario={usuario} />
      </Route>
      {/*<Link to="/DatosCandidato"> Editar ficha candidato </Link>*/}
      <Route exact path="/DatosCandidato">
        <FichaCandidato usuario={usuario} />
      </Route>
      {/*<Link to="/DatosEmpresa"> Editar ficha Empresa</Link>*/}
      <Route exact path="/DatosEmpresa">
        <FichaEmpresa usuario={usuario} />
      </Route>
      {/*<Link to="/logOut">Cerrar sesión</Link>*/}
      <Route exact path="/logOut">
        <LogoutUsuario logOut={logOut} logueado={logueado} />
      </Route>
      {/*<Link to="/PublicarOferta">Publicar oferta</Link>*/}
      <Route exact path="/PublicarOferta">
        <Oferta usuario={usuario} />
      </Route>

      {/*<Link to="/ofertas">Ver Ofertas</Link>*/}
      <Route exact path="/ofertas">
        <Ofertas verOfertas={Ofertas} />
      </Route>
      <Route exact path="/ofertas/:id">
        <DetalleOferta />
      </Route>
     {/* <Link to="/Candidatos/:email"> Ver mi perfil</Link>*/}
      <Route exact path="/Candidatos/:email">
        <PerfilCandidato usuario={usuario} />
      </Route>

    </BrowserRouter>

  )




}


export default App;
