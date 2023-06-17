import { Container, Row, Col, Image } from '../../utils/Bootstrap.jsx';

const imageURI = process.env.PUBLIC_URL + '/images/';

export default function ThreeThings() {

  return (
    <section id="special-sauce">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col xs={11} sm={12}>
            <h2 className="text-center mb-4">Special Sauce</h2>
          </Col>
        </Row>

        <Row className="g-4 d-flex justify-content-center">
          <Col xs={11} lg={4} 
            className='three-things-panel'>            
            <Image fluid src={imageURI+"special-sauce-1.webp"} alt="placeholder" />
            <h3 className="text-center">Diverse Skill Sets</h3>
            <p className="text-center text-lg-start">By uniting beginners and experienced coders, the cohort nurtures a dynamic learning environment where knowledge sharing, collaboration, and well-rounded coding principles thrive.</p>
          </Col>

          <Col xs={11} lg={4}
            className='three-things-panel'>            
            <Image fluid src={imageURI+"special-sauce-2.webp"} alt="placeholder" />
            <h3 className="text-center">Supportive Community</h3>
            <p className="text-center text-lg-start">The students create a close-knit community, fostering a sense of support and collaboration. This environment encourages active engagement, cooperation, and personal development.</p>
          </Col>

          <Col xs={11} lg={4}
            className='three-things-panel'>            
            <Image fluid src={imageURI+"special-sauce-3.webp"} alt="placeholder" />
            <h3 className="text-center">Collective Growth</h3>
            <p className="text-center text-lg-start">The cohort's coding journey fuels growth, celebration, and continuous improvement, inspiring students to reach new coding heights together.</p>
          </Col>

        </Row>
      </Container>
    </section>
  )
}