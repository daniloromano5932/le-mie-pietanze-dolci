import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

import { instagram, tiktok } from "../svg";


function Footer() {
  const today = new Date();

  return (
    <Container fluid className='footer' id='footer'>
      <Row>
        <Col className='justify-content-center'>Dove puoi trovarmi</Col>
      </Row>
      <Row xs="auto" className='justify-content-center media'>
          <Col className='justify-content-center'><a href={instagram.href} target="_blank" rel="noreferrer"
            title="Instagram filyguarrera">{instagram.svg}</a></Col>
          <Col className='justify-content-center'><a href={tiktok.href} target="_blank" rel="noreferrer">
            {tiktok.svg}<i className={"bi bi-tiktok"}></i>
          </a></Col>
      </Row>
      <Row>
        <Col>© Copyright {today.getFullYear()}</Col>
      </Row>
    </Container>
  );
}

export default Footer;