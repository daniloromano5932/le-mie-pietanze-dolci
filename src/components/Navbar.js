import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { search } from "../svg"

function NavigationBar() {
  return (
    <Navbar sticky='top' expand="lg" className={`bg-body-tertiary`}>
      <Container fluid>
        <Navbar.Brand href="/">DolcidiFily</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/categories">Dolci</Nav.Link>
            <Nav.Link href="#footer">Contattami</Nav.Link>
            <Nav.Link href="/search">{search}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;