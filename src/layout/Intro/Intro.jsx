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
              <p>Congratulations to BocaCode's Cohort-10 for successfully completing a challenging 10-week course and impressing us with their incredible final project! We applaud the 18 outstanding students who have truly amazed us with their brilliance. Well done, you all!</p>        
          </Col>
        </Row>
      </Container>
    </main>
  )
}