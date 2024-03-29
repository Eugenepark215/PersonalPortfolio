import React from 'react';
import { Container, Col, Nav, Navbar } from 'react-bootstrap';

export default function NavBar(props) {
  return (
    <Navbar className='sage-background'>
      <Container fluid className='g-5'>
        <Col className='col-6 display-flex'>
          <Navbar.Brand href="#home">
            <h1 className='name font-rubik gray-font'>EUGNE PARK</h1>
          </Navbar.Brand>
        </Col>
        <Nav className='ms-auto' id='icon-container'>
          <Nav.Link href="mailto: epark215@gmail.com">
            <i className='icon fa-solid fa-envelope gray-font'/>
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/eugenepark215/">
            <i className='icon fa-brands fa-linkedin gray-font'/>
          </Nav.Link>
          <Nav.Link href="https://github.com/Eugenepark215">
            <i className='icon fa-brands fa-github gray-font' />
          </Nav.Link>
          <Nav.Link href="https://drive.google.com/file/d/1194BHw1F1sPn0Ne4dd5wa-MxWTPiHhu_/view?usp=share_link">
            <i className='icon fa-solid fa-file gray-font' />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
