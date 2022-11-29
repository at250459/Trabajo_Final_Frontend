import React from "react";
import "./App.css";
import Navbar from "./Componentes/Navbar/Navbar";
import Footer from "./Componentes/Footer/Footer";
import Home from "./Componentes/Home/Home";
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Recomendaciones from './Componentes/Recomendaciones/Recomendaciones';
import Accion from './Componentes/Recomendaciones/Accion/Accion';
import Deportes from './Componentes/Recomendaciones/Deportes/Deportes';
import Rpg from './Componentes/Recomendaciones/RPG/Rpg';
import Shooter from './Componentes/Recomendaciones/Shooter/Shooter'
import Terror from './Componentes/Recomendaciones/Terror/Terror';
import Proximamente from './Componentes/Proximamente/Proximamente';
import Contacto from './Componentes/Contacto/Contacto';

function App() {
  return (

    <Router>
      <Navbar />
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/recomendaciones" element={<Recomendaciones/>} />
        <Route path="/accion" element={<Accion/>} />
        <Route path="/deportes" element={<Deportes/>} />
        <Route path="/rpg" element={<Rpg/>} />
        <Route path="/shooter" element={<Shooter/>} />
        <Route path="/terror" element={<Terror/>} />
        <Route path="/proximamente" element={<Proximamente/>} />
        <Route path="/contacto" element={<Contacto/>} />
        </Routes>
        

      <Footer />
      
           
    </Router>
   
  );
}

export default App;
