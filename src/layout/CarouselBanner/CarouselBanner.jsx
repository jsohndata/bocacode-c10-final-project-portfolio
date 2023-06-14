import { Container, Row, Col } from "../../utils/Bootstrap.jsx";
import CarouselScroller from "../../components/CarouselScroller";

export default function CarouselBanner() {

  return (
    <section id="day-in-the-life">
      <Container>
        <Row>
          <Col className="bg-danger">
            <CarouselScroller />
          </Col>

          <Col md={6} className="bg-info">
            <h2>Day in the Life</h2>   
            <p>Step into the whimsical realm of Cohort-10, where animated discussions and laughter create a symphony of camaraderie. Each snapshot captures the essence of this enchanting journey—determined faces immersed in studies, minds swirling with knowledge and growth. Explore our gallery and witness the magic as the ordinary transforms into extraordinary moments within the captivating world of Cohort-10.</p>       
          </Col>
        </Row>
      </Container>
    </section>
  )
}