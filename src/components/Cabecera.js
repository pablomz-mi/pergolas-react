import React from 'react';
import { SocialIcon } from 'react-social-icons';
import logo from '../assets/logo pergolas.webp';
import "../components/cabecera.css";


const Cabecera = () => {
  return (
    <header>
      <div className='cont-logo'>
        <img className='logo' src={logo} alt="Logo" />
        <h1>Pérgolas Canor</h1>
      </div>

      <nav className='navegacion'>
        <a href="#inicio" >Inicio</a>
        <a href="#galeria">Galeria</a>
        <a href="#contacto">Nosotros</a>
        <a href="#nosotros" >Contacto</a>
      </nav>
      <div>
        <div className='iconos'>
          <SocialIcon className='img-iconos' url="https://www.facebook.com" />
          <SocialIcon className='img-iconos' url="https://www.whatsapp.com" />
          <SocialIcon className='img-iconos' url="https://www.instagram.com" />
        </div>
        <div>
          <button className='btn-nav' >solicita tu presupuesto</button>
          <button className='btn-nav'>Llamanos 614306304</button>
        </div>
      </div>
    </header>
  );
};

export default Cabecera;