import React from 'react';
import './Card.css'

const Card = (props) => {
    return (
        <div className='d-flex p-5' id='card'>
            <div className='d-flex justify-content-center' id='contImg'>
            <img id='imagen-card' src={props.image}></img>
            </div>
            <div className='' id='contText'>
                <h3>{props.title}</h3>
                <p>{props.body}</p>
                <p>{props.reseña}</p>
                <p>{props.calificacion}</p>
                <p>{props.genero}</p>
                <p>{props.lanzamiento}</p>
            </div>
        </div>
    )
}

export default Card;