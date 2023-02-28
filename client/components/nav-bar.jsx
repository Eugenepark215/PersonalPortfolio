import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function NavBar(props) {
  return (
    <Row>
      <Col>
        logo
      </Col>
      <Col>
        email
      </Col>
      <Col>
        linkedin
      </Col>
      <Col>
        github
      </Col>
      <Col>
        resume
      </Col>
    </Row>
  );
}
