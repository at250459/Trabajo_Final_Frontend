import React from 'react';
import './Banner.css'

const Banner = (props) => {
    return (
        <div className='' id='banner'>
            <img className='' src={props.image}></img>
        </div>
    )
}

export default Banner;