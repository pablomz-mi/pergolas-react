import React from 'react';
import Slider from 'react-slick';

import '../components/carrusel.css';

import servicios1 from '../assets/carrusel/servicios1.webp';
import servicios2 from '../assets/carrusel/servicios2.webp';
import servicios3 from '../assets/carrusel/servicios3.webp';
import servicios4 from '../assets/carrusel/servicios4.webp';
import servicios5 from '../assets/carrusel/servicios5.webp';

const Carrusel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='carrusel'>
    
      <Slider  {...settings}>
        <div>
          <img className='slider' src={servicios1} alt="Imagen 1" />
        </div>
        <div>
          <img className='slider' src={servicios2} alt="Imagen 2" />
        </div>
        <div>
          <img className='slider' src={servicios3} alt="Imagen 3" />
        </div>
        <div>
          <img className='slider' src={servicios4} alt="Imagen 4" />
        </div>
        <div>
          <img className='slider' src={servicios5} alt="Imagen 5" />
        </div>
        
      </Slider>
      <button className='btn-carrusel'>Visita nuestra Galeria</button>
    </div>
  );
};

export default Carrusel;