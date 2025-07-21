import { useState } from "react";
import { Navbar, Container, Nav, Form, Row, Col, Button } from "react-bootstrap";
import fantasy from "../books/fantasy.json";
import AllTheBooks from "./AllTheBooks";

function MyNav() {

  const [BookSearch, setBookSearch] = useState('')

  const foundBooks =
    fantasy.filter(book => book.title.toLowerCase().includes(BookSearch.toLowerCase()))

  return (
    <>
      <Navbar expand="lg" className="bg-body-secondary">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">About</Nav.Link>
              <Nav.Link href="#link">Browse</Nav.Link>
            </Nav>
            <Form>
              <Row>
                <Col xs="auto">
                  <Form.Control
                    type="text"
                    placeholder={'Search your book...'}
                    value={BookSearch}
                    onChange={(e) => setBookSearch(e.target.value)}
                    className='inputStyle'
                  />
                </Col>
              </Row>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <AllTheBooks foundBooks={foundBooks} />
    </>
  );
}

export default MyNav;
