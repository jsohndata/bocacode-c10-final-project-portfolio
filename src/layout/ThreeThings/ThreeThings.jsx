import { Container, Row, Col, Image } from '../../utils/Bootstrap.jsx';

export default function ThreeThings() {

  return (
    <section id="three-things">
      <Container>
        <Row>
          <Col xs={11} sm={12}>
            <h2 className="text-center">Special Sauce</h2>
          </Col>
        </Row>

        <Row>
          <Col md={4}>            
            <Image fluid src="https://via.placeholder.com/600x600" alt="placeholder" />
            <h3>Diverse Skill Sets</h3>
            <p>The cohort combines beginners and experienced coders, fostering a dynamic learning environment where knowledge is shared, collaboration flourishes, and coding principles are well-rounded.</p>
          </Col>

          <Col md={4}>            
            <Image fluid src="https://via.placeholder.com/600x600" alt="placeholder" />
            <h3>Supportive Community</h3>
            <p>The coding cohort forms a supportive community where students actively engage, collaborate, and nurture a sense of camaraderie, fostering a comfortable learning environment.</p>
          </Col>

          <Col md={4}>            
            <Image fluid src="https://via.placeholder.com/600x600" alt="placeholder" />
            <h3>Collective Growth</h3>
            <p>The cohort's coding journey fuels growth, celebration, and continuous improvement, inspiring students to reach new coding heights together.</p>
          </Col>

        </Row>
      </Container>
    </section>
  )
}