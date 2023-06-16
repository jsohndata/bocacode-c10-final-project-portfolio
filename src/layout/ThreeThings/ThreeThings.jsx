import { Container, Row, Col, Image } from '../../utils/Bootstrap.jsx';

const imageURI = process.env.PUBLIC_URL + '/images/';

export default function ThreeThings() {

  return (
    <section id="special-sauce">
      <Container>
        <Row>
          <Col xs={11} sm={12}>
            <h2 className="text-center">Special Sauce</h2>
          </Col>
        </Row>

        <Row>
          <Col xs={11} lg={4} 
            className='three-things-panel'>            
            <Image fluid src={imageURI+"special-sauce-1.webp"} alt="placeholder" />
            <h3 className="text-center">Diverse Skill Sets</h3>
            <p className="text-center text-lg-start">The cohort combines beginners and experienced coders, fostering a dynamic learning environment where knowledge is shared, collaboration flourishes, and coding principles are well-rounded.</p>
          </Col>

          <Col xs={11} lg={4}
            className='three-things-panel'>            
            <Image fluid src={imageURI+"special-sauce-2.webp"} alt="placeholder" />
            <h3 className="text-center">Supportive Community</h3>
            <p className="text-center text-lg-start">The coding cohort forms a supportive community where students actively engage, collaborate, and nurture a sense of camaraderie, fostering a comfortable learning environment.</p>
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