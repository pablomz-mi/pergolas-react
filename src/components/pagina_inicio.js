import React from 'react';
import foto_principal from '../assets/fondo_madera.webp';
import servicios1 from '../assets/carrusel/servicios1.webp';
import servicios2 from '../assets/carrusel/servicios2.webp';
import servicios3 from '../assets/carrusel/servicios3.webp';
import servicios4 from '../assets/carrusel/servicios4.webp';
import servicios5 from '../assets/carrusel/servicios5.webp';
import '../components/p_inicio.css';
import Carrusel from './Carrusel';

const Pagina_inicio = () => {
    return (
        <div>
            <div className='image-container'>
                <img className='img-principal' src={foto_principal} alt="" />
                <div className='text-overlay'>
                    <h1 className='text-principal'>Pérgolas Canor</h1>
                    <h3>Fabricación propia de pérgolas de madera
                    en Murcia y Benissa</h3>
                    <h5>La mejor pérgola al mejor precio.</h5>
                    <h5>Dinos tu presupuesto, ¡te lo mejoramos!</h5>
                    <button className='btn-principal'>Solicita presupuesto gratis</button>
                </div>

            </div>
            <Carrusel/>
            <div className='content-servicios'>
                <div><h1>Nuestros Servicios</h1></div>

                <div className='servicios'>
                <div className='text-servicios'>
                <h3>Diseño y construcción de pérgolas</h3>
                <p className="tick-paragraph">Creamos pérgolas personalizadas para adaptarse a 
                cualquier espacio y estilo, utilizando los mejores materiales 
                y técnicas de construcción.</p>
                </div>
                <img className='img-servicios' src={servicios1} alt="" />
                </div>

                <div className='servicios'>
                <img className='img-servicios' src={servicios2} alt="" />
                <div className='text-servicios'>
                <h3>Revestimientos</h3>
                <p className="tick-paragraph">Instalamos revestimientos de madera de alta calidad 
                que dan un toque de elegancia y calidez a tu hogar.</p>
                </div>
                </div>

                <div className='servicios'>
                <div className='text-servicios'>
                <h3>Cerramientos y tejados</h3>
                <p className="tick-paragraph">Creamos cerramientos de madera y pladur a medida que aportan privacidad 
                y protección a tu terraza o jardín.</p>
                <p className="tick-paragraph">Aislamos y construimos tejados con acabados en teja y tégola</p>
                </div>
                <img className='img-servicios' src={servicios3} alt="" />
                </div>

                <div className='servicios'>
                <img className='img-servicios' src={servicios4} alt="" />
                <div className='text-servicios'>
                <h3>Reparación y mantenimiento</h3>
                <p className="tick-paragraph">Un mantenimiento adecuado de tu pérgola, le prolonga la vida útil.</p>
                <p className="tick-paragraph">Pintura, cambio de madera estropeada, reparación de cubierta, 
                tanto de tela asfáltica, tégola o teja.</p>
                </div>
                </div>


                <div className='servicios'>
                <div className='text-servicios'>
                <h3>Montaje de estructuras</h3>
                <p className="tick-paragraph">¿Tienes tu propia pérgola? Nosotros te la montamos.</p>
                <p className="tick-paragraph">Casetas, porches, toldos y marquesinas de madera.</p>
                <p className="tick-paragraph">Todos los modelos y estilos.</p>
                </div>
                <img className='img-servicios' src={servicios5} alt="" />
                </div>
            </div>
      </div>
    );
  };

  export default Pagina_inicio;