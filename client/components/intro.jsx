import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function Intro() {
  return (
    <Row className="justify-content-md-center intro">
      <Col className="col-3 display-flex">
        <img src='/cat.JPG' className='intro-pic'/>
      </Col>
      <Col className="col-6 intro-text">
        <h2 className='gray-font'>I&#39;m Eugene!</h2>
        <h4 className='gray-font'>A Software Developer and a fan of music!</h4>
        <p className='gray-font'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
      </Col>
    </Row>
  );
}
