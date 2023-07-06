import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function Intro() {
  return (
    <Row className="justify-center intro">
      <Col className="col-3 display-flex justify-content-md-center">
        <img src='/cat.JPG' className='intro-pic'/>
      </Col>
      <Col className="col-5 intro-text">
        <h2 className='gray-font'>Hi There!</h2>
        <p className='gray-font'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </Col>
    </Row>
  );
}
