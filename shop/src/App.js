import React, {useState} from 'react';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, img } from 'react-bootstrap';
import './App.css';
import data from './data.js';

function App() {

  let [shoes, shoes변경] = useState(data);

  return (
    <div className="App">
      
      <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Shoe Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="Jumbo">
      <h1>Hello, world</h1>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-md-4">
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" alt="" width="100%"/>
          <h4>{ shoes[0].title }</h4>
          <p>상품설명 & 가격</p>
        </div>
        <div className="col-md-4">
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" alt="" width="100%"/>
          <h4>상품명</h4>
          <p>상품설명 & 가격</p>
        </div>
        <div className="col-md-4">
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" alt="" width="100%"/>
          <h4>상품명</h4>
          <p>상품설명 & 가격</p>
        </div>
      </div>
    </div>

    </div>
  );
}

export default App;
