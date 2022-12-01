import React from 'react';
import './Proximamente.css'
import Card from '../Card/Card'

function Proximamente(){
    return(
        <>
        <div id='colorfondo'>
        <div className='bg-dark text-light'>
        <div className='d-flex justify-content-center flex-column align-items-center'>
            <h1 className='text-center mt-5 tamaño-titulo'> Proximos juegos </h1>
            <p className='intro w-75 mt-5 mb-5 tamaño-intro'> En esta seccion vas a encontrar toda la informacion acerca de los proximos lanzamientos. Estaremos subiendo los nuevos trailers que nos presenten asi como tambien sus primeros gameplays para que veas su jugabilidad. Estos son los juegos mas esperados por todos, los cuales nos brindan grandes expectativas para nuestro entretenimiento</p>
        </div>
        </div>
        
        <div className='mt-5'>
            <Card image='https://assets-prd.ignimgs.com/2022/06/23/forspoken-button-fin-1656019045535.jpg' title='Forspoken' body='Forspoken es un RPG de acción que sigue el viaje de Frey, una neoyorquina transpotada a la tierra hermosa y cruel de Athia. En busca de un camino a casa, Frey debe utilizar sus recién descubiertas habilidades mágicas para cruzar extensos paisajes, luchar contra criaturas monstruosas y derrotar a poderosas matriarcas conocidas como Tantas. Forspoken se ha diseñado para aprovechar todo el poder del hardware de la PlayStation 5, demostrando la filosodía de Lumious Productions (Final Fantasy XV) de ofrecer una experiencia de juego como nunca antes, aunando la última tecnología con la creatividad. Fusionando ritmos contemporáneos electrónicos con un tono fantástico, la banda sonora de Forspoken la han compuesto los compositores ganadores de BAFTA Bear McCreary (God of War y la serie de TV The Walking Dead) y Garry Schyman (saga Bioshock).' genero='Genero : RPG' lanzamiento='Fecha de lanzamiento: 25 de Diciembre del 2022'/> 
        </div>
        <div className='d-flex justify-content-center p-5'>
        <iframe width="900" height="506" src="https://www.youtube.com/embed/i3D0q9WMz3g" title="Forspoken - The Game Awards 2021 Trailer | PS5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className='mt-5'>
            <Card image='https://i.ytimg.com/vi/rONkg5GN3RI/maxresdefault.jpg' title='Death Space Remake' body='Dead Space es un videojuego de horror de disparos en tercera persona distribuido por EA Redwood Shores (ahora conocido como Visceral Games) para Playstation 3, Xbox 360 y Microsoft Windows. Fue lanzado el 14 de octubre del 2008 para las consolas y el 20 de octubre para Windows constituyendo el primer juego de una serie que abarcaría varios videojuegos, cómics y películas animadas y además es el primero de la serie principal. El jugador toma el papel de un ingeniero llamado Isaac Clarke, quien pelea contra una especie alienígena polimórfica de no-muertos llamados Necromorfos a bordo de una nave minera interestelar infestada donde además de lidiar con los horrendos seres, Isaac debe luchar por mantener su cordura. Esta nueva version remasterizada pretende utilizar todas las nuevas tecnologias con los ultimos motores graficos y mejoras de jugabilidad para una mejor experiencia del usuario' genero='Genero : Terror' lanzamiento='Fecha de lanzamiento : 05 de Enero del 2023' /> 
        </div>
        <div className='d-flex justify-content-center p-5'>
        <iframe width="900" height="506" src="https://www.youtube.com/embed/mWrBqrifdvk" title="Dead Space | Tráiler Oficial | PS5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        </div>
        <div className='mt-5'>
            <Card image='https://sm.ign.com/ign_es/cover/m/marvels-mi/marvels-midnight-suns_e54r.jpg' title='Midnight Suns' body='Midnight Suns de Marvel es el mayor evento que combina una gran historia, relaciones con los personajes, personalización y evolución de un juego de roles con estrategia táctica y mecánica de combate de un nuevo y revolucionario juego de táctica basado en cartas. En lo más oscuro del Universo Marvel, forjarás vínculos inquebrantables con legendarios superhéroes de Marvel y peligrosos guerreros sobrenaturales en la lucha contra la mayor amenaza del mundo: fuerzas demoníacas de Lilith y del dios mayor Chthon. Eres el Cazador, el primer héroe totalmente personalizable del Universo Marvel. Personaliza tu aspecto, elige tus reacciones y entabla amistades con leyendas de Marvel como Los Vengadores, los X-Men o los Fugitivos, entre otros. Decide a quién llevar contigo en las misiones, en cuáles embarcarte y un sinfín de opciones para hacer de esta una experiencia única. ' genero='Genero : Accion' lanzamiento='Fecha de lanzamiento : 22 de Febrero del 2023' /> 
        </div>
        <div className='d-flex justify-content-center p-5'>
        <iframe width="900" height="506" src="https://www.youtube.com/embed/Ripgh8W2PMg" title="Marvel’s Midnight Suns | Announcement Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        </div>
        </div>
        </>
    );
}

export default Proximamente;
