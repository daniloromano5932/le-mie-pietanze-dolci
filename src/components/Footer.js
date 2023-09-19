import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';

import { email, instagram, tiktok } from "../svg";


function Footer() {
  const today = new Date();

  return (
    <Container fluid className='footer fixed-bottom'>
      <Row>
        <Col>Dove puoi trovarmi</Col>
      </Row>
      <Row xs="auto" className='justify-content-center'>
        <Stack direction="horizontal" gap={5} className={"socialMedia"}>
          <Col ><a href={instagram.href} target="_blank" rel="noreferrer"
            title="Instagram filyguarrera">{instagram.svg}</a></Col>
          <Col><a href={email.href}>{email.svg}<i className={"bi bi-envelope-fill"}></i></a></Col>
          <Col><a href={tiktok.href} target="_blank" rel="noreferrer">
            {tiktok.svg}<i className={"bi bi-tiktok"}></i>
          </a></Col>
        </Stack>
      </Row>
      <Row>
        <Col>© Copyright {today.getFullYear()}</Col>
      </Row>
    </Container>
  );
}

export default Footer;