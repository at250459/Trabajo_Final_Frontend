import React from 'react';
import "./Footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import{ Link } from 'react-router-dom';

const Footer = () => {
    return(
        <div className='main-footer'>
            <div className='container'>  
                <div className='row'>
                    {/* Column1 */}
                    <div className='col'>
                        <h4>Nosotros</h4>
                        <p className='textofoot'> Podes comunicarte con nosotros en nuestras redes : </p>
                        <ul className='list-unstyled'>
                            <li> <FaFacebookSquare /> Alfatex-games</li>
                            <li> <FaInstagram /> Alfatex-Digital-Games</li>
                            <li>  <FaWhatsapp /> 113-349-5578</li>
                            <li> <FaEnvelope /> Alfatex-games@gmail.com</li>
                        </ul>
                    </div>
                    {/* Column2 */}
                    <div className='col'>
                        <h4> Todas las novedades </h4>
                        <p className='textofoot'>¿ Quieres ser el primero en enterarte de los nuevos lanzamientos ? Completa tu email para recibir mas informacion.</p>
                        <p className='anuncio'> ¡Estamos a tu disposicion!</p>
                        <Link to='/contacto' className='btn btn-secondary'>Contacto</Link>{' '}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer;