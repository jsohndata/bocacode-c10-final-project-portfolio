import { Container, Row } from '../../utils/Bootstrap.jsx';
import data from '../../data/portfolio.json';
import Panel from './Panel.jsx';

export default function List() {

  return (
    <Container>
      <Row>
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