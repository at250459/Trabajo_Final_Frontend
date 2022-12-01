import React from 'react';
import{ Link } from 'react-router-dom';
import Banner from '../Banner/Banner'
import './Recomendaciones.css'
import Card from '../Card/Card'





function Recomendaciones(){
    return(
        <div className='bgcolorr text-light'>
        <div className='d-flex justify-content-around p-4'>
        <Link to='/accion' className='btn btn-primary boton'>
          ACCION
        </Link>
        <Link to='/deportes' className='btn btn-primary boton'>
          DEPORTES
        </Link>
        <Link to='/rpg' className='btn btn-primary boton '>
          RPG
        </Link>
        <Link to='/shooter' className='btn btn-primary boton'>
          SHOOTER
        </Link>
        <Link to='/terror' className='btn btn-primary boton'>
          TERROR
        </Link>
        </div>

        <div className='d-flex justify-content-center flex-column align-items-center'>
            <h1 className='text-center mt-3 tamaño-titulo'> Te presentamos los 5 mejores juegos del año </h1>
            <p className='intro w-75 mt-5 tamaño-intro'> Si estas comenzando en el mundo de los videojuegos o acabas de comprar tu nueva consola y no sabes con que juego comenzar, aquí te dejamos los 5 mejores juegos del año con los que no vas a poder despegarte del sillon</p>
        </div>

        <div className='d-flex justify-content-center p-5'>
        <Banner image='https://i.blogs.es/9ec81f/godofwar1/1366_2000.jpeg'/>
        </div>
        <div>
            <Card image='https://w0.peakpx.com/wallpaper/629/747/HD-wallpaper-god-of-war-ragnarok.jpg' title='God of War  Ragnarok' body='God of War Ragnarok es una aventura de acción a cargo de Sony Santa Monica y PlayStation Studios para PlayStation 4 y PlayStation 5 que sigue con las aventuras de Kratos tras su anterior entrega. Juntos, Kratos y Atreus se adentran en los nueve reinos en busca de respuestas mientras las fuerzas de Asgard se preparan para la guerra. A lo largo de su aventura, explorarán paisajes mitológicos increíbles, reunirán aliados de los nueve reinos y se enfrentarán a imponentes enemigos con aspecto de monstruos y dioses nórdicos.' reseña='God of War: Ragnarok tiene un puntaje de 94/100 en Metacritic, lo que lo hace un título “universalmente aclamado”, según los estándares de este sitio. Esta calificación fue obtenida del promedio de 125 reviews de medios especializados, que por lo visto, están poniendo calificaciones de entre 90 y 100 puntos. Este juego una bella cátedra de cómo se debe hacer una secuela e impone un estándar de calidad en lo que todas las segundas partes o continuaciones deberían aspirar a ser y claro, es un título imperdible para todos los poseedores de una PlayStation 4 o 5' calificacion=' Calificacion 9.6 / 10' /> 
        </div>

        <div className='d-flex justify-content-center p-5'>
        <Banner image='https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2021/07/fifa-22-2422749.jpg'/>
        </div>
        <div>
            <Card image='https://media.a24.com/p/2fbf25b2367a0f353a2ffddf3254318b/adjuntos/296/imagenes/009/022/0009022799/fifa23tapajpeg.jpeg?2022-07-18-16-12-18' title='Fifa 23' body='FIFA 23 es una nueva entrega de la saga de deportes y fútbol a cargo de EA Canada y Electronic Arts para PC, PlayStation 4, Xbox One, PlayStation 5, Xbox Series, Stadia y Switch. EA SPORTS FIFA 23 lleva el juego del mundo al campo, con torneos masculinos y femeninos de FIFA World Cup que llegarán a lo largo de la temporada, la incorporación de equipos de clubes femeninos por primera vez y funciones de juego cruzado con más de 19.000 jugadores, más de 700 equipos, más de 100 estadios y más de 30 ligas, incluyendo la UEFA Champions League y la Premier League.' reseña='La jugabilidad de FIFA 23 tiene una fluidez imbatible y busca ese curioso equilibrio entre el entretenimiento como videojuego y la simulación. Una fórmula que se replantea de manera experimental cada año, a veces con más acierto que otros y que nos deja una conclusión clara: la nueva entrega es claramente superior a la anterior a los controles. Y que ésto último lo podamos disfrutar más en compañía de jugadores de todas las plataformas a través del juego cruzado le da puntos adicionales al conjunto.' calificacion=' Calificacion 9.0 / 10'/>
        </div>

        <div className='d-flex justify-content-center p-5'>
        <Banner image='https://i.ytimg.com/vi/GRc2rqDDBGk/maxresdefault.jpg'/>
        </div>
        <div>
            <Card image='https://www.egames.news/__export/1635614557273/sites/debate/img/2021/10/30/elden-ring-4.jpg_423682103.jpg' title='Elden Ring' body='Elden Ring es un título de acción RPG a cargo de From Software y Bandai Namco para PC, PlayStation 4, Xbox One, PlayStation 5 y Xbox Series. Álzate, Sinluz, y que la gracia te guíe para abrazar el poder del Círculo de Elden y encumbrarte como señor del Círculo en las Tierras Intermedias. Un vasto mundo perfectamente conectado en el que los territorios abiertos estarán repletos de situaciones y mazmorras enormes con diseños complejos y tridimensionales.' reseña='Elden Ring es un obra maestra sin discusión. From Software ha elevado tantísimo el listón de lo que es capaz de hacer cuando deja volar su imaginación, que es muy difícil imaginar cómo puede ser mejor el próximo juego que hagan. Parece que la única vía que todavía tiene margen de innovación es la de las mecánicas, muy arraigadas en la idiosincrasia del estudio.

Te llevarán decenas de horas completar todo lo que Elden Ring tiene para ofrecerte. La cantidad de contenido es enorme y te nutrirá de diversión durante varias semanas. La profundidad de las Tierras Intermedias no parece tener fin y siempre os quedará un nuevo rincón que visitar que habíais dejado pasar.' calificacion=' Calificacion 9.8 / 10'/>
        </div>

        <div className='d-flex justify-content-center p-5'>
        <Banner image='https://as01.epimg.net/meristation/imagenes/2022/11/02/noticias/1667407030_238358_1667407475_noticia_normal.jpg'/>
        </div>
        <div>
            <Card image='https://assets.reedpopcdn.com/modern-warfare-2-visual-3.jpg/BROK/thumbnail/1200x1200/quality/100/modern-warfare-2-visual-3.jpg' title='Call of Duty: Modern Warfare 2' body='Call of Duty - Modern Warfare II es la secuela del éxito de taquilla de 2019 Modern Warfare. Con el regreso del icónico líder del equipo, el capitán John Prices, el intrépido John "Soap" MacTavish, el veterano sargento Kyle "Gaz" Garrick y el lobo solitario y favorito de los fans Simon "Ghost" Riley, descubre qué hace a la fuerza especial 141 (FH141) el equipo legendario que es hoy. 

Aprovecha nuevas armas, vehículos y equipo de última tecnología para enfrentar a los enemigos. Equípate y lleva la batalla al mar para asediar a enemigos bajo el agua, penetrar una base enemiga muy fortificada, infiltrarte por los canales y liberar a los muy necesarios aliados en un lugar clandestino en las montañas.

Infinity Ward presenta jugabilidad emocionante, de nueva generación y de tecnología de punta. Lucha junto a amigos en una experiencia verdaderamente envolvente con sonido, iluminación y gráficos increíblemente realistas que producen el Call of Duty más avanzado de la historia.' reseña=' 

Modern Warfare® II ofrece un conjunto de innovaciones de juego y gráficas que elevan la saga a nuevas cotas: Un sistema avanzado de IA rediseñado, tecnología de renderizado y fotogrametría mejorada, un sistema nuevo de armero permite más personalización que antes e innovaciones pioneras que ponen los cimientos para la jugabilidad de la nueva generación.' calificacion=' Calificacion 9.2 / 10'/> 
        </div>









        </div>
    );
}

export default Recomendaciones;
