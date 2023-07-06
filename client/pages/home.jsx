import React from 'react';
import NavBar from '../components/nav-bar.jsx';
import Intro from '../components/intro.jsx';
import { Col, Container, Row } from 'react-bootstrap';

export default function Home(props) {
  return (
    <Container fluid className='g-0'>
      <NavBar/>
      <Intro/>
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
