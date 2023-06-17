import { Container, Row , Col} from '../../utils/Bootstrap.jsx';

import Gallery from '../../components/Gallery/';

export default function Portfolio({ data, anchorID, title }) {

  return (
    <section id={anchorID}>
      <Container className="gallery">
        <Row>
          <Col>
            <h2 className="text-center mb-4">{title}</h2>
          </Col>
        </Row>

        <Row className='g-4'>
          <Gallery data={data} />
        </Row>
      </Container>
    </section>
  );
}