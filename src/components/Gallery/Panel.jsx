import { Col, Card } from '../../utils/Bootstrap.jsx';

export default function Panel( {data: {name, content}} ) {

  return (
    <Col md={4}>
      <Card>        
        <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {content}
        </Card.Text>
      </Card.Body>
      </Card>  
    </Col>
  );
}