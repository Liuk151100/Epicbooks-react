// import { useState } from "react";
import { Navbar, Container, Nav, Form, Row, Col, NavDropdown } from "react-bootstrap";
import fantasy from "../books/fantasy.json";
import history from "../books/history.json";
import horror from "../books/horror.json";
import romance from "../books/romance.json";
import scifi from "../books/scifi.json";
import { Link, Navigate, useNavigate } from "react-router";
import Welcome from "./Welcome";

function MyNav(props) {

  function changeFilter(filterCategory) {
    props.setFilterBook(filterCategory)
    props.setActive(1)
  }

  return (
    <>
      <Navbar expand="lg" className="bg-body-secondary">
        <Container>
          <Navbar.Brand to="/" as={Link} onClick={() => props.setActive(1)}>Epicbooks E-book</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="/about" as={Link}>About</Nav.Link>
              <NavDropdown title="Filter" id="navbarScrollingDropdown">
                <NavDropdown.Item to="/" as={Link} onClick={() => changeFilter(fantasy)}>Fantasy</NavDropdown.Item>
                <NavDropdown.Item to="/" as={Link} onClick={() => changeFilter(history)}>History</NavDropdown.Item>
                <NavDropdown.Item to="/" as={Link} onClick={() => changeFilter(horror)}>Horror</NavDropdown.Item>
                <NavDropdown.Item to="/" as={Link} onClick={() => changeFilter(romance)}>Romance</NavDropdown.Item>
                <NavDropdown.Item to="/" as={Link} onClick={() => changeFilter(scifi)}>Scifi</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form>
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder={'Search your book...'}
                    value={props.BookSearch}
                    onChange={(e) => props.setBookSearch(e.target.value)}
                    className='inputStyle'
                  />
                </Col>
              </Row>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Welcome />
    </>
  );
}

export default MyNav;
