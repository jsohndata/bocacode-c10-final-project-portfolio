import { Carousel, Image } from '../../utils/Bootstrap.jsx';

export default function List( {data} ) {

  return (
    <Carousel>
      {          
        data.map( (each, index) => {
          return (
            <Carousel.Item>
              <Image
                src={each.image}
                alt="First slide"
                fluid />

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