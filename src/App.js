import logo from './logo.svg';
import './App.css';
import Spinner from 'react-bootstrap/Spinner';
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Candidatos from "./Candidatos";
import Empresa from "./Empresas";
import { BrowserRouter, Route, Link } from "react-router-dom";



function App() {


  return (

    <BrowserRouter>
      <Link to="/registroCandidato">Registrarse como candidato</Link>
      <Route exact path="/registroCandidato">
        <Candidatos />
      </Route>
      <Route exact path="/registroEmpresa">
        <Empresa />
      </Route>
    </BrowserRouter>

  )




}


export default App;
