import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "../../../App.css";
import { IoIosLogIn } from "react-icons/io";
import "./nav.css"

export default function NavRoutes() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="box_nav"
    >
      <Container>
        <NavLink className="nav_link" to="/">
          <Navbar.Brand>The Batman</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="mt-1">
          <Nav className="me-auto">
            <NavLink className="nav_link" to="/GenerateImage">
              <Nav.Link href="/">Generate Image</Nav.Link>
            </NavLink>
            <NavLink className="nav_link" to="/models">
              <Nav.Link href="/">Models</Nav.Link>
            </NavLink>
            <NavLink className="nav_link" to="/models">
              <Nav.Link href="/">About</Nav.Link>
            </NavLink>
            <NavLink className="nav_link" to="/models">
              <Nav.Link href="/">Contact</Nav.Link>
            </NavLink>
          </Nav>
          <Nav>
            <NavLink className="nav_link" to="/login">
              <Nav.Link href="/">
                <IoIosLogIn className="icons" />
                Login
              </Nav.Link>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
