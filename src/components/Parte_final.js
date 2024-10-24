import React from 'react';
import '../components/parte_final.css';

const Parte_final = () => {
    return (
        <footer>
            <div className='colum-footer'>
            <h3>Pérgolas Canor</h3>
            <p>Nos especializamos en la creación de estructuras a medida, como cubiertas, pérgolas, cerramientos y revestimientos, 
            para que puedas disfrutar de tu hogar y al aire libre con estilo y confort.</p>
            <button className='btn-footer'>Solicita tu presupuesto</button>
            <button className='btn-footer btn-verde'>Consulta por whatsapp</button>
            </div>
            <div className='colum-footer'>
            <p>Contacto</p>
                <ul className='lista-footer' >
                    <li ><a href="#" >Camino Viejo de Valencia</a></li>
                    <li ><a href="#">Benissa, Alicante 03720</a></li>
                    <li ><a href="#">965 730 087</a></li>
                </ul>
                <ul className='lista-footer' >
                    <li ><a href="#" >Calle Naranjo</a></li>
                    <li ><a href="#">Benissa, Alicante 03720</a></li>
                    <li ><a href="#">965 730 087</a></li>
                </ul>
                <ul className='lista-footer' >
                    <li ><a href="#" >info@pergolascanor.es</a></li>
                    <li ><a href="#">614 30 63 04</a></li>
                    <li ><a href="#">965 730 087</a></li>
                </ul>

            </div>
            <div className='colum-footer'>
            <p>Menú</p>
                <ul className='lista-footer'>
                    <li ><a href="#inicio" >Inicio</a></li>
                    <li ><a href="#galeria">Galeria</a></li>
                    <li ><a href="#contacto">Contacto</a></li>
                    <li ><a href="#nosotros" >Nosotros</a></li>
                </ul>
            </div>
      </footer>
    );
  };

  export default Parte_final;