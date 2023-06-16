import { Container, Row } from '../../utils/Bootstrap.jsx';
import data from '../../data/portfolio.json';
import Panel from './Panel.jsx';

export default function List() {

  return (
    <Container className="gallery">
      <Row className='g-3'>
        {
          data.map( (each, index) => {
            return (
              <Panel 
                key={index}
                data={each} />
            )}
          )
        }
      </Row>
    </Container>
  );
}