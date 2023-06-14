import { Carousel, Image } from '../../utils/Bootstrap.jsx';
import data from '../../data/carousel-day-in-life.json'

export default function List() {

  return (
    <Carousel>
      {          
        data.map( (each, index) => {
          return (
            <Carousel.Item key={index}>
              <Image
                src={each.image}
                fluid
                alt="First slide"
              />

              <Carousel.Caption>
                <h3>{each.title}</h3>
                <p>{each.content}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })
      }        
    </Carousel>
  );
}