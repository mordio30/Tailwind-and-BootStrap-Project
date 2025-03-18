import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Superhero API</Navbar.Brand> {/* Use 'as={Link}' for Navbar.Brand */}
        <Nav className="ms-auto">
          <Link to="/">Home</Link>
          <Link to="/about" className="ms-3">About</Link>
          <Link to="/characters" className="ms-3">Heroes</Link>
          <Link to="/contact" className="ms-3">Contact</Link>
          <Link to="/favorites" className="ms-3">Favorites</Link>

        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;


