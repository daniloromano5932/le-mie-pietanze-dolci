import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import instagram from "../assets/svg/instagram.svg"
import tiktok from "../assets/svg/tiktok.svg"
import { INSTAGRAM_URL, TIKTOK_URL } from '../constants';

function Footer() {

  const today = new Date();

  return (
    <Container
      fluid className='footer'
      id='footer'
    >
      <Row className='media'>
        <Col className='justify-content-center'>Dove puoi trovarmi</Col>
      </Row>
      <Row
        xs="auto"
        className='justify-content-center'
      >
        <Col className='justify-content-center'>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            title="Instagram filyguarrera"
            className='social-link'
          >
            <img
              src={instagram}
              alt='immagine instagram'
            />
          </a>
          <a
            href={TIKTOK_URL}
            target="_blank"
            rel="noreferrer"
            className='social-link'
          >
            <img
              src={tiktok}
              alt='immagine tiktok'
            />
          </a>
        </Col>
      </Row>
      <Row>
        <Col className='copyright'>
          © Copyright {today.getFullYear()}
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
