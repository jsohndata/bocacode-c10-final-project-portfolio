import { Col, Card } from '../../utils/Bootstrap.jsx';

export default function Panel( {data: {name}} ) {

  return (
    <Col md={4}>
      <Card>        
        <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      </Card>  
    </Col>
  );
}