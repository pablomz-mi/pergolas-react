import React from 'react';

import servicios1 from '../assets/carrusel/nosotros1.webp';
import servicios2 from '../assets/carrusel/nosotros2.webp';
import servicios3 from '../assets/carrusel/nosotros3.webp';
import servicios4 from '../assets/carrusel/nosotros4.webp';

import '../components/nosotros.css';


const Nosotros = () => {
    return (
        <div>
            <div className='content-servicios'>
                <div><h1>Sobre nosotros</h1></div>

                <div className='servicios'>
                    <div className='text-servicios'>
                        <p>Pérgolas Canor es la parte especializada en estructuras 
                            y pérgolas de madera de Carpintería Canor, con más de 40 años 
                            de experiencia en el sector de la madera.</p>
                    </div>
                    <img className='img-servicios' src={servicios1} alt="" />
                </div>

                <div className='servicios'>
                    <img className='img-servicios' src={servicios2} alt="" />
                    <div className='text-servicios'>
                    <p>Tenemos un equipo de alta cualificación y un backoffice para hacer 
                        realidad aquello que imagines y logran una total satisfacción del 
                        producto y su instalación final.</p>
                    </div>
                </div>

                <div className='servicios'>
                    <div className='text-servicios'>
                    <p>Nos especializamos en la creación de estructuras a medida, como cubiertas,
                         pérgolas, cerramientos y revestimientos, para que puedas disfrutar de tu 
                         hogar y al aire libre con estilo y confort</p>
                    </div>
                    <img className='img-servicios' src={servicios3} alt="" />
                </div>

                <div className='servicios'>
                    <img className='img-servicios' src={servicios4} alt="" />
                    <div className='text-servicios'>
                    <p>Contamos con un equipo de profesionales altamente cualificados y responsables.
                         Ellos se encargarán de asesorarte y guiarte en cada paso del proyecto, 
                         desde el diseño hasta la instalación final.</p>
                    </div>
                </div>
            </div>
      </div>
    );
  };

  export default Nosotros;