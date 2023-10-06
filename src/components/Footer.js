import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { instagram, tiktok } from "../svg";

function Footer() {
  const today = new Date();

  return (
    <Container fluid className='footer' id='footer'>
      <Row className='media'>
        <Col className='justify-content-center'>Dove puoi trovarmi</Col>
      </Row>
      <Row xs="auto" className='justify-content-center'>
        <Col className='justify-content-center'>
          <a
            href={instagram.href}
            target="_blank"
            rel="noreferrer"
            title="Instagram filyguarrera"
            className='social-link'
          >
            {instagram.svg}
          </a>
          <a 
            href={tiktok.href} 
            target="_blank" 
            rel="noreferrer"
            className='social-link'
          >
            {tiktok.svg}
          </a></Col>
      </Row>
      <Row>
        <Col className='copyright'>© Copyright {today.getFullYear()}</Col>
      </Row>
    </Container>
  );
}

export default Footer;