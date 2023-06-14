import { Container, Row, Col } from "../../utils/Bootstrap.jsx";
import CarouselSlide from "../../components/CarouselSlide/CarouselSlide.jsx";

export default function CarouselBanner() {

  return (
    <section id="day-in-the-life">
      <Container>
        <Row>
          <Col>
            <CarouselSlide />
          </Col>

          <Col md={5}>
            <h2>Day in the Life</h2>          
          </Col>
        </Row>
      </Container>
    </section>
  )
}