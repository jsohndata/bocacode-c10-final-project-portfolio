import { Carousel, Image } from '../../utils/Bootstrap.jsx';

export default function CarouselSlide() {

  return (
    <Carousel>
      <Carousel.Item>
        <Image
          src="https://picsum.photos/600/400?random=1"
          fluid
          alt="First slide"
        />

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>    
</Carousel>
  );
}