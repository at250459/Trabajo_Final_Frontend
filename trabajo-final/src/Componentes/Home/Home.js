import React from "react";
import "./Home.css"
import Carousel from '../Carousel/Carousel'

const Inicio = () => {
    return(
        <div className="bgcolorh text-light">
        <div className='d-flex justify-content-center bg-dark text-light flex-column align-items-center'>
            <h1 className='text-center mt-2 mb-2 tamaño-titulo'> Bienvenido a ALFATEX-GAMES </h1>
            <p className='intro mt-2 mb-2 tamaño-intro'> Donde encontraras las mejores recomendaciones para tu diversion </p>

        </div>

        
        <Carousel />
        <div className="textoMedio">
            <p>Somos un grupo personas que se dedican a analizar cada punto del juego con la mayor precision posible para brindarle a nuestros seguidores una gran confianza a la hora de seleccionar los mejores juegos para su diversion</p>
            <p>Esta pagina esta basada en los comentarios de las 10 paginas de recomendaciones mas conocidas del mundo gamer.</p>
            <p>Ademas, gracias a nuestra seccion de contacto, recibimos numerosos comentarios y reseñas de nuestro clientes, las cuales son tenidas en cuenta y utilizada para ayudar a mas jugadores como tu. En esta seccion tambien podras consultarnos sobre recomendaciones para distintas categorias de juegos</p>
            <p>Esperamos que puedas disfrutar de nuestro contenido y si tenes alguna recomendacion, no dudes en enviarnosla en nuestra seccion de Contacto</p>
        </div>
        </div>
        );
    }
    
    export default Inicio;