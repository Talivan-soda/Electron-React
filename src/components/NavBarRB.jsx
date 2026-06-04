import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidgetRI from './CartWidgetRI';
import {NavLink} from "react-router-dom";

function NavBarRB({ quantity }) {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <img alt="Logo" src="/img/logo-nav.webp"/>
            </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to='/category/Televisores y Accesorios'>Televisores y Accesorios</Nav.Link>
            <Nav.Link as={NavLink} to='/category/seguridad'>Seguridad y Monitoreo</Nav.Link>
          </Nav>
          <Nav.Link as={NavLink} to="/cart" className="d-flex align-items-center">
            <CartWidgetRI quantity={quantity} />
          </Nav.Link>
        </Container>
      </Navbar>

    </>
  );
}

export default NavBarRB;