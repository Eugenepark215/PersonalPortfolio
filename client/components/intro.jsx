import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function Intro() {
  return (
    <Row className="sage-background justify-content-md-center intro">
      <Col className="col-6">
        <img src='/cat.JPG' className='head-shot'/>
      </Col>
      <Col className="col-6">
        <p className='introText'>I&#39;m Eugene!</p>
      </Col>
    </Row>
  );
}
