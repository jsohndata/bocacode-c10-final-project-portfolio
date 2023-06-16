import { Container, Row, Col } from '../../utils/Bootstrap.jsx';

export default function Intro() {

  return(
    <main id="home">
      <Container fluid className='hoho'>
        <Row className="g-0">
          <Col 
            md={{span: 8, offset: 2}}
            lg={{span:4, offset: 7}}>
            <div className="media-content">
              <h1>C-10 Portfolio</h1>
              <p className="text-xs-center text-md-start">Hats off to BocaCode's Cohort 10 for conquering a rollercoaster ride of a 10-week course and emerging victorious with their mind-blowing final project! We raise our glasses high and toast to the 13 exceptional students who have truly dazzled us with their brilliance. Bravo, you magnificent bunch!</p>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  )
}