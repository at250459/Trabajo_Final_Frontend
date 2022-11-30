import React from 'react';
import Card from '../../Card/Card'
import Banner from '../../Banner/Banner'
import './Deportes.css'

function Deportes(){
    return(
        <>
        <div className='bgcolord text-light'>

        <div className='d-flex justify-content-center flex-column align-items-center'>
            <h1 className='text-center mt-3 tamaño-titulo'> Estos son los 5 mejores juegos de Deportes </h1>
        </div>

        <div className='d-flex justify-content-center p-5'>
        <Banner image='https://i.blogs.es/00b5f9/f1-manager-2022-pc/1366_2000.jpeg'/>
        </div>
        <div>
            <Card image='https://d3ugyf2ht6aenh.cloudfront.net/stores/498/047/products/f1-champions1-50c2cff23f9d7b1ec116560116852562-1024-1024.jpg' title='F1 2022 Champions Edition' body='Toma asiento para la nueva temporada donde autos y reglas rediseñadas redefinen el día de la carrera; pon a prueba tus habilidades en el Autódromo Internacional de Miami y degusta la pompa y el glamur en F1® Life. Corre con los nuevos y flamantes autos de la temporada 2022 de Formula 1® con la plantilla auténtica de todos los 20 pilotos y 10 equipos. Toma control de tu experiencia de carrera con nuevas secuencias de carrera inmersivas o de emisión.' reseña= 'Estamos ante la mejor entrega a nivel de jugabilidad de la saga en mucho tiempo, comenzando por un cambio palpable a la hora de conducir el F1, cambio lógico por todos los ajustes que tienen los monoplazas en la nueva reglamentación, siendo algo más difíciles de controlar en ciertas situaciones como si nos pasamos de frenada o de velocidad en una curva, siendo más importante que nunca ese baile preciso entre los pies del freno y el acelerador, apretando cada uno con la intensidad justa y en el momento justo para poder trazar bien una curva y salir de ella a la máxima velocidad posible.' calificacion=' Calificacion 8.7 / 10' /> 
        </div>

        <div className='d-flex justify-content-center p-5'>
        <Banner image='https://cloudfront-us-east-1.images.arcpublishing.com/infobae/EB3VTI6R5VBPVFBYFQP7JYQI3E.jpg'/>
        </div>
        <div>
            <Card image='https://metajuego1.com/assets/uploads/product_R5HWusEePLoGxtN9rTf6.jpg' title='Madden NFL 22' body='Madden NFL 22 es un juego de deportes y fútbol americano a cargo de EA Tiburon y Electronic Arts para PC, PlayStation 4, Xbox One, PlayStation 5 y Xbox Series que introduce nuevas características de Franchise como gestión del personal, un motor de escenarios mejorado y estrategia semanal. Comparte el progreso del avatar y la clase de jugador entre Face of The Franchise y The Yard con el progreso unificado. ' reseña='Nuevas características de Franchise como gestión del personal, un motor de escenarios mejorado y estrategia semanal. Comparte el progreso del avatar y la clase de jugador entre Face of The Franchise y The Yard con el progreso unificado. Y, por primera vez en MUT, ajusta Superstar X-Factors en el descanso.'  calificacion=' Calificacion 8.5 / 10'/>
        </div>

        <div className='d-flex justify-content-center p-5'>
        <Banner image='https://as01.epimg.net/meristation/imagenes/2022/09/06/noticias/1662487050_482320_1662487118_noticia_normal.jpg'/>
        </div>
        <div>
            <Card image='https://assets.2k.com/1a6ngf98576c/aJr72dhZ0T5pPPOut92oZ/fd57ea3ee5e28452faa1f24d72d3f9a7/NBA23-WEBSITE-PRE_ORDER-HOMPAGE-MODULE2-RETAIL_CAROUSEL-STD_EDITION-425x535.jpg' title='NBA 2K23' body='Compite con tus equipos y estrellas favoritos de la NBA y la WNBA y experimenta lo máximo del juego realista. Con presentación visual de primer nivel, IA de jugador mejorada, planteles actualizados y equipos históricos mejorados, el juego nunca se sintió más real y completo que en NBA 2K23. Siente la energía del público, la intensidad de la competencia y el entretenimiento sin fin de uno de los productos deportivos más inmersivos de los videojuegos de hoy.' reseña='Una realidad incuestionable: el rey del baloncesto en los videojuegos ha regresado. El relevo de la anterior temporada se ha completado con una entrega destinada recordarnos por qué NBA 2K sigue sentando cátedra. No a base de reinventar las mismas fórmulas, sino de hacerlas más atractivas e interesantes. Logrando que nos emocionemos con cada canasta, aunque llevemos docenas encestadas en la misma tarde, y suframos de manera irracional con cada tapón o robo, aunque reconozcamos en silencio que ha estado muy bien ejecutado.' calificacion=' Calificacion 8.5 / 10'/>
        </div>

        <div className='d-flex justify-content-center p-5'>
        <Banner image='https://www.gamespew.com/wp-content/uploads/2020/08/Tennis-World-Tour-2-3.jpg'/>
        </div>
        <div>
            <Card image='https://d3ugyf2ht6aenh.cloudfront.net/stores/361/025/products/ps5-tennis-world-tour1-71d7b6864a7f74836b16500698420746-1024-1024.jpg' title='Tennis World Tour' body='Tennis World Tour es un videojuego de simulación de tenis desarrollado por Bigben y Breakpoint para consolas y PC. El título pretende devolver el género del tenis a los videojuegos y el ocio digital, apostando por una jugabilidad realista, movimientos extraídos de los tenistas y un catálogo de deportistas de élite muy atractivo.' reseña='Este simulador incluye algunos veteranos de la saga Top Spin. Esto es un indicativo de por dónde va a ir su jugabilidad, más pausada y centrada en dosificar nuestras energías. Una barra bajo nuestro personaje nos indica la resistencia que nos queda, mientras que un círculo sirve para saber la fuerza que le estamos imprimiendo al golpe. Cuanta más fuerza, más rápida irá la bola y más difícil será para el rival alcanzarla, pero más energía gastaremos.' calificacion=' Calificacion 8.3 / 10'/> 
        </div>

        <div className='d-flex justify-content-center p-5'>
        <Banner image='https://www.mcvuk.com/wp-content/uploads/ufc_4_071120-a.png'/>
        </div>
        <div>
            <Card image='https://static-cdn.jtvnw.net/ttv-boxart/518711_IGDB-272x380.jpg' title='Ultimate Fighting Championship 4' body='En EA SPORTS UFC 4, el luchador en el que te conviertes depende de tu estilo de lucha, tus logros y tu personalidad. Desarrolla a tu personaje y personalízalo mediante un sistema de progreso unificado en todos los modos. Pasa de ser un aficionado desconocido a ser una superestrella de la UFC en el nuevo modo de carrera. Experimenta los orígenes de los deportes de combate en dos nuevos entornos: Kumite y el Patio, o desafía al mundo en nuevas luchas rápidas o campeonatos mundiales online para convertirte en el campeón indiscutible.' reseña='Cuenta con un gran trabajo dentro de lo que ocurre en el octógono pero que se queda un poco corta a nivel de contenidos fuera del mismo, con la salida de algunos modos de juego y la ausencia de ciertas estrellas de la UFC. UFC 4 no es un juego de lucha como estáis acostumbrados sino que cuenta con una aproximación a la simulación, con combos de pocos golpes, multitud de técnicas y daño diferenciado en diferentes partes del cuerpo que resulta bastante realista y que nos va a hacer que estemos muy atentos a proteger según qué zonas de nuestro cuerpo.' calificacion=' Calificacion 8.0 / 10'/>
        </div>

        </div>
        </>
    );
}

export default Deportes;
