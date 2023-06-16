import { Container, Row, Col } from '../../utils/Bootstrap.jsx';

export default function Intro() {
  const videoUri = process.env.PUBLIC_URL + '/videos/video3lg.mp4';

  return(
    <main id="home">
      <Container>
        <Row className="g-0">
          <div className="media-container">
            <div className="media-wrapper">
              <video autoPlay loop muted>
                <source src={videoUri} type="video/mp4" /> 
              </video>
            </div>
          </div>

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