import { Github } from 'react-bootstrap-icons';
import { Container, Row, Col } from "../../utils/Bootstrap.jsx";

export default function Footer() {
  
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <p className="text-center">
            <a href="https://github.com/jsohndata/bocacode-c10-final-project-portfolio" target="_blank" rel="noreferrer" className="text-white"><Github color="white" size={40} />
            <br />
            See Code in GitHub</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}