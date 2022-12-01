import React from 'react';
import{ Link } from 'react-router-dom';
import Banner from '../../Banner/Banner'
import './Accion.css'
import Card from '../../Card/Card'


function Accion(){
    return(
        <>
        <div className='bgcolora text-light'>
        <div className='d-flex justify-content-around p-4'>
        <Link to='/accion' className='btn btn-light boton'>
          ACCION
        </Link>
        <Link to='/deportes' className='btn btn-light boton'>
          DEPORTES
        </Link>
        <Link to='/rpg' className='btn btn-light boton '>
          RPG
        </Link>
        <Link to='/shooter' className='btn btn-light boton'>
          SHOOTER
        </Link>
        <Link to='/terror' className='btn btn-light boton'>
          TERROR
        </Link>
        </div>
        <div className='d-flex justify-content-center flex-column align-items-center'>
            <h1 className='text-center mt-3 tamaño-titulo'> Estos son los 5 mejores juegos de Accion </h1>
        </div>

        <div className='d-flex justify-content-center p-5'>
        <Banner image='https://cdn.mos.cms.futurecdn.net/3CkudpkKTJz8f27YDnJ8B9.jpg'/>
        </div>
        <div>
            <Card image='https://img.prisguiden.no/3360/3360586/image.248x300!m.png' title='Harry Potter : Hogwarts Legacy' body='Hogwarts Legacy es un RPG de acción envolvente y de mundo abierto dentro del mundo presentado por primera vez en los libros de Harry Potter. Embárcate en un viaje por localizaciones familiares y nuevas mientras exploras y descubres bestias fantásticas, personalizas a tu personaje y creas pociones, dominas el lanzamiento de hechizos, mejoras tus talentos y te conviertes en el mago que quieres ser.Experimenta Hogwarts en el siglo XIX. Tu personaje es un estudiante que tiene la clave de un secreto antiguo que amenaza con despedazar el mundo hechicero. Descubre la sensación de vivir en Hogwarts mientras haces aliados, enfrentas magos oscuros y en definitiva decides el destino del mundo hechicero. Tu legado es lo que decidas hacer con él. Vive lo que no está escrito.' reseña='Juego de accion en mundo abierto, con tanto por hacer, donde podremos asistir a clases, aprender habilidades, hechizos, explorar.... Creemos que Hogwarts Legacy es más ambicioso y más grande de lo que se esperaba' calificacion=' Calificacion 9.1 / 10' /> 
        </div>

        <div className='d-flex justify-content-center p-5'>
        <Banner image='https://www.ungeek.ph/wp-content/uploads/2021/09/death_stranding_directors_cut_review.jpg'/>
        </div>
        <div>
            <Card image='https://upload.wikimedia.org/wikipedia/pt/thumb/e/eb/Death-Stranding-poster.jpg/270px-Death-Stranding-poster.jpg' title='Death Stranding' body='Hideo Kojima, el legendario creador de videojuegos, nos ofrece una nueva experiencia que desafía a todos los géneros. Sam Bridges debe enfrentarse a un mundo completamente transformado por la muerte en Death Stranding. Llevando los restos desconectados de nuestro futuro en sus manos, se embarca en un viaje para reconectar un mundo devastado.' reseña='Gráficamente es de los mejores juegos de la pasada generación. Los modelados faciales son los que más ganan en ese aspecto, con un diseño limpísimo y muy cuidado, notándose hasta los poros de la piel o las lágrimas al caer por las mejillas. Los escenarios son una maravilla también, con unos paisajes variados, llenos de detalles y con una distancia de dibujado profunda y muy dinámica, dando una sensación de profundidad muy amplia en un mundo que, en realidad, no es tan grande como puede parecer cuando abrimos el mapa. Los efectos también están muy bien recreados, como cuando los EV hacen acto de presencia o el tiempo cambia de manera aleatoria dependiendo de por donde pases. Nada está sujeto al azar, todo está perfectamente medido y calculado. De lo mejorcito del juego sin duda alguna.' calificacion=' Calificacion 9.0 / 10'/>
        </div>

        <div className='d-flex justify-content-center p-5'>
        <Banner image='https://assets.reedpopcdn.com/horizon-forbidden-west-levelling-header.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/horizon-forbidden-west-levelling-header.jpg'/>
        </div>
        <div>
            <Card image='https://estacionmars.pe/wp-content/uploads/2021/12/HORIZON-FORBIDDEN-WEST-PS5-1.png' title='Horizon Forbidden West' body='Explora tierras remotas, enfréntate a máquinas más grandes e imponentes y descubre increíbles tribus en tu regreso a un futuro lejano en el mundo apocalíptico de Horizon. La tierra se muere. Las rugientes tormentas y una desolación imparable causan estragos entre lo que queda de la humanidad, unas cuantas tribus dispersas, mientras nuevas y temibles máquinas merodean por sus fronteras. La vida en la Tierra se enfrenta a una nueva extinción y nadie sabe por qué. Solo Aloy es capaz de descubrir los secretos que hay detrás de estas amenazas, y restablecer el orden y el equilibrio en el mundo. La profundidad de las Tierras Intermedias no parece tener fin y siempre os quedará un nuevo rincón que visitar que habíais dejado pasar.' reseña='Horizon Forbidden West es un videojuego absolutamente hermoso. Sus elaborados sistemas de combate hacen que enfrentar a las impresionantes máquinas sea muy satisfactorio y la mayoría de misiones secundarias son experiencias divertidas que profundizan en su mundo' calificacion=' Calificacion 8.9 / 10'/>
        </div>

        <div className='d-flex justify-content-center p-5'>
        <Banner image='https://media.revistagq.com/photos/5fbb86458856b0b406dd76e6/master/w_1600%2Cc_limit/spider-man%25202.jpg'/>
        </div>
        <div>
            <Card image='http://d3ugyf2ht6aenh.cloudfront.net/stores/001/048/201/products/spider-man-miles-morales-cybernetic-swing-i1002821-63299e89911f8856f816601366908235-640-0.jpg' title='Spider-Man : Miles Morales' body='En la última aventura del universo de Spider-Man de Marvel, el adolescente Miles Morales intenta ajustarse a su nuevo hogar mientras que sigue los pasos de su mentor, Peter Parker, para convertirse en el nuevo Spider-Man. Pero cuando un feroz enfrentamiento por el poder amenaza con destruir su hogar, el aspirante a héroe entiende que un gran poder conlleva una gran responsabilidad. Para salvar a la Nueva York de Marvel, Miles debe adoptar el manto de Spider-Man y volverlo propio.' reseña='Un GRAN juego que supera, solo por cuestiones particulares, a su predecesor. ¿Por qué? Hay dos motivos que nos resulta necesario destacar, y que están a la vista: por un lado, este juego es más corto y, por ende, más compacto en su propuesta. Por otro lado, la historia de Miles Morales nos deja empatizar muchísimo más con el personaje.' calificacion=' Calificacion 8.8 / 10'/> 
        </div>

        <div className='d-flex justify-content-center p-5'>
        <Banner image='https://p4.wallpaperbetter.com/wallpaper/448/691/597/video-game-ghost-of-tsushima-wallpaper-preview.jpg'/>
        </div>
        <div>
            <Card image='https://storage.qoo-img.com/game/12894/Ry8JEoJifTrIIfnKX1Ks0wgeVaQVuUKm.png' title='Ghost of Tsushima' body='Descubre las maravillas ocultas de Tsushima en esta aventura de acción en un mundo abierto creada por Sucker Punch Productions y PlayStation Studios, disponible en PS5 y PS4. Forja un nuevo camino y emplea tácticas de guerra poco convencionales para liberar Tsushima. Desafía a tus enemigos con tu katana, domina el arco para eliminar las amenazas lejanas, aprende tácticas de sigilo para emboscar a los enemigos y explora una nueva historia en la Isla Iki.' reseña='El desarrollo de nuestro personaje es increíble y la trama está muy bien trabajada , hago énfasis en el final que me ha parecido sublime. Lo que más haremos en Ghost of Tsushima es combatir , combatir contra las invasores, combatiremos mucho. Por suerte el combate es tremendamente divertido e incluso desafiantes por momentos. Podríamos dividir el combate entre sígilo y combate directo. El siglo usa la fórmula muy conocida de los Assassins Creed , matar por la espalda , saltos aéreos , flechas , objetos que llaman la atención , escalar tejados , etc.' calificacion=' Calificacion 8.6 / 10'/>
        </div>

        </div>
        </>
    );
}

export default Accion;
