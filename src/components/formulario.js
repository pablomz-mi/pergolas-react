import React, { useState } from 'react';
import '../components/formulario.css';

function Formulario() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    poblacion: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    
  };

  return (
    <div>
        <div className='pagina-form'>
            <div className='contenedor-text'>
                <h1 className='centrar-text'>Atención personalizada</h1>
                <p>Contamos con un equipo de profesionales 
                    altamente cualificados y responsables.</p>
                <p>Ellos se encargarán de asesorarte y guiarte en 
                cada paso del proyecto, desde el diseño hasta la instalación final</p>
            </div>
            
            <form className='formulario' onSubmit={handleSubmit}>
            <div>
                <label>Nombre y Apellidos:</label>
                <input className='imput-form'
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                />
            </div>
            <div>
                <label>Correo electronico:</label>
                <input className='imput-form'
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
            </div>
            <div>
                <label>Telefono:</label>
                <input className='imput-form'
                type="text"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                />
            </div>
            <div>
                <label>Poblacion:</label>
                <input className='imput-form'
                type="text"
                name="poblacion"
                value={formData.poblacion}
                onChange={handleChange}
                />
            </div>
            <div>
                <label>Mensaje:</label>
                <textarea className='text-form'
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                />
            </div>
            <button className='btn-form' type="submit">Contactanos</button>
            </form>
        </div>
        <div className='text-final'>
            <p>Pérgolas Canor, te informa sobre su Política de Privacidad respecto 
                del tratamiento y protección de los datos de carácter personal de 
                los usuarios y clientes que puedan ser recabados por la navegación 
                o contratación de servicios a través del sitio Web http://www.pergolascanor.es</p>
            
            <p>En este sentido, el Titular garantiza el cumplimiento de la normativa
                 vigente en materia de protección de datos personales, reflejada en la
                  Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales
                   y de Garantía de Derechos Digitales (LOPD GDD). Cumple también con el 
                   Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de
                    abril de 2016 relativo a la protección de las personas físicas (RGPD).</p>
            
            <p>El uso de sitio Web implica la aceptación de esta Política de Privacidad así como 
                las condiciones incluidas en el Aviso Legal.</p>
        </div>
    </div>
  );
}

export default Formulario;