import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function NavBar(props) {
  return (
    <Row>
      <Col className='col-8'>
        logo
      </Col>
      <Col>
        <i className='fa-solid fa-envelope'/>
      </Col>
      <Col>
        <i className='fa-brands fa-linkedin'/>
      </Col>
      <Col>
        <i className='fa-brands fa-github'/>
      </Col>
      <Col>
        <i className='fa-solid fa-file'/>
      </Col>
    </Row>
  );
}
