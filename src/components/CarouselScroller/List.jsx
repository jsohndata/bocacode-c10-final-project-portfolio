import { Carousel, Image } from '../../utils/Bootstrap.jsx';

export default function List( {data} ) {

  return (
    <Carousel fade>
      {          
        data.map( (each, index) => {
          return (
            <Carousel.Item key={index}>
              <Image
                src={process.env.PUBLIC_URL+'/images/'+each.image}
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