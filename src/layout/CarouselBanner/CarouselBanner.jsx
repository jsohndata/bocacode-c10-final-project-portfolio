import { Container, Row, Col } from "../../utils/Bootstrap.jsx";
import CarouselScroller from "../../components/CarouselScroller";

export default function CarouselBanner( {title, content} ) {

  return (
    <section id="day-in-the-life">
      <Container>
        <Row>
          <Col className="bg-danger">
            <CarouselScroller />
          </Col>

          <Col md={5} className="bg-info">
            <h2>{ title }</h2>   
            <p>{ content }</p>       
          </Col>
        </Row>
      </Container>
    </section>
  )
}