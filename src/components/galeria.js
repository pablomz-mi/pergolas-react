import React from 'react';
import PhotoAlbum from 'react-photo-album';
import "../components/galeria.css";

import foto1 from '../assets/carrusel/15.webp';
import foto2 from '../assets/carrusel/19.webp';
import foto3 from '../assets/carrusel/28.webp';
import foto4 from '../assets/carrusel/38.webp';
import foto5 from '../assets/carrusel/42.webp';
import foto6 from '../assets/carrusel/50.webp';
import foto7 from '../assets/carrusel/54.webp';
import foto8 from '../assets/carrusel/servicios1.webp';
import foto9 from '../assets/carrusel/servicios2.webp';
import foto10 from '../assets/carrusel/servicios3.webp';
import foto11 from '../assets/carrusel/servicios4.webp';
import foto12 from '../assets/carrusel/servicios5.webp';



const photos = [
    { src: foto1, },
    { src: foto2, },
    { src: foto3, },
    { src: foto4, },
    { src: foto5, },
    { src: foto6, },
    { src: foto7, },
    { src: foto8, },
    { src: foto9, },
    { src: foto10, },
    { src: foto11, },
    { src: foto12, },
  ];

  function Galeria() {
    return (
      <div className="gallery-container">
        {photos.map((photo, index) => (
          <div key={index} className="gallery-item">
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </div>
    );
  }

export default Galeria;