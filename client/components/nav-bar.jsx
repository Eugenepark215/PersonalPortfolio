import React from 'react';
import { Container, Col, Nav, Navbar } from 'react-bootstrap';

export default function NavBar(props) {
  return (
    <Navbar>
      <Container fluid>
        <Col className='col-6'>
          <Navbar.Brand href="#home">
            <img src='server/public/favicon.ico' width="32" height="32" alt='logo'/>
          </Navbar.Brand>
        </Col>
        <Nav className='ms-auto' id='icon-container'>
          <Nav.Link href="mailto: epark215@gmail.com">
            <i className='icon fa-solid fa-envelope'/>
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/eugenepark215/">
            <i className='icon fa-brands fa-linkedin'/>
          </Nav.Link>
          <Nav.Link href="https://github.com/Eugenepark215">
            <i className='icon fa-brands fa-github' />
          </Nav.Link>
          <Nav.Link href="https://drive.google.com/file/d/1194BHw1F1sPn0Ne4dd5wa-MxWTPiHhu_/view?usp=share_link">
            <i className='icon fa-solid fa-file'/>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
