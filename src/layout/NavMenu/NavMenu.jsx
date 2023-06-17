import { HashLink } from "react-router-hash-link";
import { Container, Navbar, Nav } from "../../utils/Bootstrap.jsx";

export default function NavMenu() {
  return (
    <Navbar expand="lg" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand as={ HashLink } to="#home">C-10</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={ HashLink } to="#special-sauce">Special Sauce</Nav.Link>
            <Nav.Link as={ HashLink } to="#day-in-life">Day in the Life</Nav.Link>
            <Nav.Link as={ HashLink } to="#portfolio">Portfolio</Nav.Link>
            <Nav.Link as={ HashLink } to="#nom-nom">Nom Nom</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>    
  );
}