import { Container, Row, Col, Image } from '../../utils/Bootstrap.jsx';

export default function Intro() {

  const imageUri = process.env.PUBLIC_URL + '/images/intro-bg.webp';
  
  return(
    <main id="home">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col xs={11} className="text-center">
            <Image src={imageUri} fluid />
          </Col>
        </Row>

        <Row className="d-flex justify-content-center">
          <Col xs={11} md={10} lg={9} className="text-center">
            <h1>C-10 Portfolio</h1>
              <p>Hats off to BocaCode's Cohort 10 for conquering a rollercoaster ride of a 10-week course and emerging victorious with their mind-blowing final project! We raise our glasses high and toast to the 13 exceptional students who have truly dazzled us with their brilliance. Bravo, you magnificent bunch!</p>        
          </Col>
        </Row>
      </Container>
    </main>
  )
}