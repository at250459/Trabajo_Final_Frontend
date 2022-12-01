import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'

function comentarios() {
  return (
    <div className='bg-dark'>
    <Carousel>
      <Carousel.Item>
        <div className='carrousel'>
        <img
          className="d-block w-100"
          src="https://allgamersin.com/wp-content/uploads/2020/11/RatchetAndClank_RiftApart.jpg"
          alt="First slide"
        />
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='carrousel'>
        <img
          className="d-block w-100"
          src="https://theworldwentaway.files.wordpress.com/2022/08/the-callisto-protocol-1.jpg"
          alt="Second slide"
        />
    </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='carrousel'>
        <img
          className="d-block w-100"
          src="https://www.semana.com/resizer/eEgxy0vUo4riFxrJLPVzWvhcEow=/1920x0/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/C2CZCBLPCZDY3PHJO5M5PSRZBY.jpeg"
          alt="Third slide"
        />
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default comentarios;