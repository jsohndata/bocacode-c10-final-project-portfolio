import { Container, Row, Col } from "../../utils/Bootstrap.jsx";
import CarouselScroller from "../../components/CarouselScroller";

export default function CarouselBanner( {title, content, data} ) {

  return (
    <section id="day-in-the-life">
      <Container>
        <Row className="g-0">
          <Col xs={12} lg={7}>
            <CarouselScroller
              data={data} />
          </Col>

          <Col xs={12} lg={5} className="bg-dark text-light p-5">
            <h2>{ title }</h2>
            <p>{ content }</p>       
          </Col>
        </Row>
      </Container>
    </section>
  )
}
