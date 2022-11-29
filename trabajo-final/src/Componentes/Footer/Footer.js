import React from 'react';
import "./Footer.css";
import Button from 'react-bootstrap/Button';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return(
        <div className='main-footer'>
            <div className='container'>  
                <div className='row'>
                    {/* Column1 */}
                    <div className='col'>
                        <h4>Nosotros</h4>
                        <p>Tienda de tarjetas de saldo y juegos digitales para PS3, PS4 y PS5 con excelente servicio al cliente. Precios bajos y gran variedad de productos disponibles</p>
                        <p> Escribinos en Facebook, Instagram, Whatsapp o por E-mail</p>
                        <ul className='list-unstyled'>
                            <li> <FaFacebookSquare /> Alfatex-games</li>
                            <li> <FaInstagram /> Alfatex-Digital-Games</li>
                            <li>  <FaWhatsapp /> 113-349-5578</li>
                            <li> <FaEnvelope /> Alfatex-games@gmail.com</li>
                        </ul>
                    </div>
                    {/* Column2 */}
                    <div className='col'>
                        <h4>Promociones</h4>
                        <p>¿Quieres ser el primero en enterarte de nuestros descuentos y promociones? Completa tu email para recibir mas info.</p>
                        <ul className='list-unstyled'>
                            <li>Descuentos de hasta 25% en juegos seleccionados cada mes</li>
                            <li>Imperdibles sorteos semanales</li>
                            <li>3x2 en cards</li>
                            
                        </ul>
                        <p className='anuncio'>¡Todo esto y mucho más! ¿Qué esperas para consultar por más información?</p>
                        <Button variant="dark">Contacto</Button>{' '}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer;