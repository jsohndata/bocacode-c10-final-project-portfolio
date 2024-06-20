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
            <p id="mozarts-ghost"><a href="https://jsohndata.github.io/no-tiempo/mozartsghost?id=18"
              rel="noreferrer"
              alt="Click on it and press control-shift."
              title="Click on it and press control-shift.">π</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}