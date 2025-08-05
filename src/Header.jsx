import { Navbar, Container, Nav, Form, Row, Col, NavDropdown, Button, InputGroup } from "react-bootstrap";
import fantasy from "../books/fantasy.json";
import history from "../books/history.json";
import horror from "../books/horror.json";
import romance from "../books/romance.json";
import scifi from "../books/scifi.json";
import { Link } from "react-router";
import Welcome from "./Welcome";
import { useMemo } from "react";

function Header(props) {



  function changeFilter(filterCategory) {
    props.setFilterBook(filterCategory)
    props.setActive(1)
  }




  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark" className="shadow-sm py-3">
        <Container>
          <Navbar.Brand as={Link} to="/" onClick={() => props.setActive(1)} className="fw-bold fs-4 text-warning">
            📚 EpicBooks
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="me-auto">
              <Nav.Link as={Link} to="/About">About</Nav.Link>
              <NavDropdown title="Filter by Genre" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/" onClick={() => changeFilter(fantasy)}>🧙 Fantasy</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/" onClick={() => changeFilter(history)}>🏛️ History</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/" onClick={() => changeFilter(horror)}>👻 Horror</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/" onClick={() => changeFilter(romance)}>💖 Romance</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/" onClick={() => changeFilter(scifi)}>🚀 Sci-Fi</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Form className="d-flex">
              <InputGroup>
                <Form.Control
                  type="search"
                  placeholder="Search your book..."
                  className="rounded-start"
                  value={props.BookSearch}
                  onChange={(e) => props.setBookSearch(e.target.value)}
                />
                <Button variant="outline-warning">Search</Button>
              </InputGroup>
            </Form>

          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Welcome />


    </>
  );
}

export default Header;
