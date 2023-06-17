import { Container, Row, Col } from "../../utils/Bootstrap.jsx";
import CarouselScroller from "../../components/CarouselScroller";

export default function CarouselBanner( {anchorID, title, content, data} ) {

  return (
    <section id={anchorID} className="carousel-banner">
      <Container>
        <Row className="g-0">
          <Col xs={12} lg={7}>
            <CarouselScroller
              data={data} />
          </Col>

          <Col xs={12} lg={5} className="text-light p-5">
            <h2>{ title }</h2>
            <p>{ content }</p>       
          </Col>
        </Row>
      </Container>
    </section>
  )
}