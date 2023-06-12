import { HashLink } from "react-router-hash-link";
import { Container, Navbar, Nav } from "../../utils/Bootstrap.jsx";

export default function NavMenu() {
  return (
        <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={ HashLink } to="#special-suace">Special Sauce</Nav.Link>
            <Nav.Link as={ HashLink } to="#photos">Photos</Nav.Link>
            <Nav.Link as={ HashLink } to="#portfolio">Portfolio</Nav.Link>
            <Nav.Link as={ HashLink } to="#nom-nom">Nom Nom</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    
  );
}