import React from 'react';
import { Row, Col } from 'react-bootstrap';

export default function NavBar(props) {
  return (
    <Row>
      <Col className='col-8'>
        logo
      </Col>
      <Col>
        <a href="mailto: epark215@gmail.com">
          <i className='fa-solid fa-envelope'/>
        </a>
      </Col>
      <Col>
        <a href='https://www.linkedin.com/in/eugenepark215/'>
          <i className='fa-brands fa-linkedin' />
        </a>
      </Col>
      <Col>
        <a href='https://github.com/Eugenepark215'>
          <i className='fa-brands fa-github' />
        </a>
      </Col>
      <Col>
        <a href='https://drive.google.com/file/d/1194BHw1F1sPn0Ne4dd5wa-MxWTPiHhu_/view?usp=share_link'>
          <i className='fa-solid fa-file'/>
        </a>
      </Col>
    </Row>
  );
}
