import { Container, Row , Col} from '../../utils/Bootstrap.jsx';
import Gallery from '../../components/Gallery/';

export default function Portfolio() {

  return (
    <section id="portfolio">
      <Container className="gallery">
        <Row>
          <Col>
            <h2 className="text-center mb-4">Portfolio</h2>
          </Col>
        </Row>

        <Row className='g-4'>
          <Gallery />
        </Row>
      </Container>
    </section>
  );
}