import React from 'react';
import NavBar from '../components/nav-bar.jsx';
import { Col, Container, Row } from 'react-bootstrap';

export default function Home(props) {
  return (
    <Container fluid className='container'>
      <NavBar/>
      <Row className="justify-content-md-center">
        <Col className="col-6">
          Software Developer
        </Col>
        <Col className="col-6">
          Picture - short intro
        </Col>
      </Row>
      <Row>
        <Col className='col-6'>
          1st project card
        </Col>
        <Col className='col-6'>
          2nd project card
        </Col>
        <Col className="col-6">
          3rd project card will snake
        </Col>
      </Row>
      <Row>
        <Col>
          Spotify Developer Tools
        </Col>
      </Row>
      <Row>
        <Col>
          Contact Form
        </Col>
      </Row>
    </Container >
  );
}
