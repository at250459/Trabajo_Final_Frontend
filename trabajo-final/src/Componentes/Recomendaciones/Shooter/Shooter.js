import React from 'react';
import Card from '../../Card/Card'
import Banner from '../../Banner/Banner'
import './Shooter.css'
import{ Link } from 'react-router-dom';

function Shooter(){
    return(
        <>
        <div className='bgcolors text-light'>
        <div className='d-flex justify-content-around p-4'>
        <Link to='/accion' className='btn btn-info boton'>
          ACCION
        </Link>
        <Link to='/deportes' className='btn btn-info boton'>
          DEPORTES
        </Link>
        <Link to='/rpg' className='btn btn-info boton '>
          RPG
        </Link>
        <Link to='/shooter' className='btn btn-info boton'>
          SHOOTER
        </Link>
        <Link to='/terror' className='btn btn-info boton'>
          TERROR
        </Link>
        </div>
<div className='d-flex justify-content-center flex-column align-items-center'>
    <h1 className='text-center mt-3 tamaño-titulo'> Estos son los 5 mejores juegos de Shooter </h1>
</div>

<div className='d-flex justify-content-center p-5'>
<Banner image='https://i.blogs.es/5b87e2/destiny2/1366_2000.jpg'/>
</div>
<div>
    <Card  image='https://m.media-amazon.com/images/I/71mJCznfFcL._AC_SX385_.jpg' title='Destiny 2' body='Hermana de las Formas, Rompedora de Espadas, Savathûn. La Reina Bruja aguarda a quienes buscan comprender su inexplicable control de la Luz. Sus soldados marchan con un nuevo propósito, envalentonados por un poder que nunca antes tuvieron. Ven, Guardián. Entra en su Mundo trono, experimenta la mejor campaña hasta la fecha y sobrevive a la verdad. Un nuevo destino - En el Mundo trono de Savathûn, un país de las maravillas corrupto, el equilibrio de poder es frágil. Desde el reluciente palacio hasta la oscuridad del pantano, todo lo que la reina esconde se puede encontrar aquí.' reseña= 'Es la mejor campaña de Destiny: por variedad de situaciones, por ambientación, por enfrentamientos contra jefes, por las nuevas mecánicas que hacen los combates todavía más dinámicos, y sobre todo, por la dificultad Leyenda. En lo narrativo, parte de su atractivo se pierde para quien no haya seguido la evolución de la trama a lo largo de las últimas dos temporadas, pero a cualquiera que haya jugado a Destiny 2 le sonará el nombre de Savathûn y eso es más que suficiente.' calificacion=' Calificacion 9.0 / 10' /> 
</div>

<div className='d-flex justify-content-center p-5'>
<Banner image='https://media.gq-magazine.co.uk/photos/613f32b9206e20aa8282c8d1/master/pass/Deathloop_Arcade%20Machines-8637260997137663145.72132952.jpg'/>
</div>
<div>
    <Card  image='https://www.itarena.ro/images/products/2021-10-18/original/339021_jpg.jpg' title='DeathLoop' body='Jugarás como Colt y buscarás una forma de poner fin a un ciclo temporal que atrapa a Blackreef mientras te persiguen los habitantes de la isla. Utiliza armas poderosas y habilidades para eliminar a 8 blancos clave por la impresionante y caótica isla antes de que el día se reinicie. Acechando entre las sombras se encuentra la asesina rival Julianna, cuya única misión es eliminar a Colt para que el ciclo continúe' reseña='Los fans de Arkane, y en general todos los jugadores a quienes guste el buen diseño de niveles y los mundos que permiten completar sus objetivos de múltiples maneras, están de enhorabuena. Deathloop, lo nuevo de Arkane Lyon, es un título original, divertidísimo, que nos sumerge en su universo y que no toma al jugador por un lelo. Podía parecer que los creadores de Dishonored habían cambiado de género, que habían apostado todo a las tendencias actuales, a los disparos y a las armas con distintas rarezas, pero para nada: lo que han hecho es darle un puñado de vueltas de tuerca a su fórmula.' calificacion=' Calificacion 8.8 / 10'/>
</div>

<div className='d-flex justify-content-center p-5'>
<Banner image='https://i.blogs.es/26d9af/metro-exodus/1366_2000.jpeg'/>
</div>
<div>
    <Card image='https://http2.mlstatic.com/D_NQ_NP_2X_810525-MLA48936479044_012022-V.webp' title='Metro Exodus' body='Metro Exodus es un juego de disparos en primera persona centrado en la narrativa y desarrollado por 4A Games que combina el combate letal y el sigilo con la exploración, el terror y la supervivencia en uno de los mundos más inmersivos de la historia de los juegos. Huye de las ruinas devastadas del metro de Moscú y embárcate en un viaje épico por todo el continente en la Rusia postapocalíptica. Es la mayor aventura de Metro hasta ahora.' reseña='Nadie se va a sorprender de ver a estas alturas de la vida un relanzamiento o una remasterización de un juego; mucho menos, una versión para las nuevas consolas. Lo que sí que sorprende es ver una actualización tan completa y cuidada como esta, con tantas novedades, y que se lanza de manera gratuita para los poseedores del original.' calificacion=' Calificacion 8.7 / 10'/>
</div>

<div className='d-flex justify-content-center p-5'>
<Banner image='https://i.blogs.es/juegos/7742/rainbow_six__nombre_provisional_/fotos/noticias/rainbow_six__nombre_provisional_-5111971.jpg'/>
</div>
<div>
    <Card image='http://d3ugyf2ht6aenh.cloudfront.net/stores/082/436/products/rainbow-six-siege1-075d000916eb3161e016651488245543-640-0.jpg' title='Rainbow Six Siege' body='Entra en el mundo altamente especializado de la respuesta armada táctica en un juego de disparos con constante expansión centrado en el juego multijugador, creado por el desarrollador Ubisoft Montreal. A partir del éxito de su larga serie de juegos tácticos de disparos, Rainbow Six Siege mejora de forma radical la dinámica de combate con entornos altamente destructibles y una creciente lista de operadores de todo el mundo, cada uno con armas, dispositivos y habilidades únicas. ' reseña='Podemos decir que Siege es entretenido y hasta podría satisfacer a aquellos un poco decepcionados con Metal Gear Online 3 porque aquí la estrategia y la coordinación sí son vitales. La destrucción y la tensión por no cometer un error que condene al resto del equipo son puntos diferenciadores frente a títulos de disparos en primera persona. En definitiva, un Rainbow Six con luces y sombras pero disfrutable para quienes busquen algo más que el enésimo juego de acción individualista.' calificacion=' Calificacion 8.4 / 10'/> 
</div>

<div className='d-flex justify-content-center p-5'>
<Banner image='https://as01.epimg.net/meristation/imagenes/2021/07/25/noticias/1627204598_872498_1627204673_noticia_normal.jpg'/>
</div>
<div>
    <Card image='https://plusgami.com/wp-content/uploads/2020/12/Sniper-Elite-4-300x374.jpg' title='Sniper Elite 4' body='Ponte en la piel de un francotirador en el shooter de la Segunda Guerra Mundial más realista que jamás se haya creado. Experimenta una gran libertad, combates tácticos en tercera persona y realiza épicos disparos a larga distancia en niveles gigantescos, en los que tendrás que librar del yugo del fascismo a una Italia en guerra. Ambientado tras los acontecimientos de su galardonado predecesor, Sniper Elite 4 invita a los jugadores a recorrer la bella península italiana: soleadas ciudades del Mediterráneo, antiguos bosques, valles montañosos e incluso colosales megaestructuras nazis.' reseña='Nos sorprendió gratamente, no porque esperáramos un título mediocre, sino porque lo que nos ha ofrecido Rebellion es una aventura de acción realmente completa y bien realizada. Y es que no demasiados juegos similares son capaces de aunar un modo campaña individual (o cooperativo a dobles) tan bien plasmado con opciones multijugador competitivas y cooperativas tan diversas' calificacion=' Calificacion 8.0 / 10'/>
</div>

</div>
        </>
    );
}

export default Shooter;
