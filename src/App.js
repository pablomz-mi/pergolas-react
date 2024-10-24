import React from 'react';
import './App.css';

import Cabecera from './components/Cabecera';
import Parte_final from './components/Parte_final';
import Pagina_inicio from './components/pagina_inicio';
import Galeria from './components/galeria';
import Nosotros from './components/nosotros';
import Formulario from './components/formulario';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const App = () => {
  return (
    <div className='app'>
      <Cabecera />
      <Pagina_inicio/>
      <Parte_final />
    </div>
  );
};

export default App;