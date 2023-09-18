import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { email, instagram, tiktok } from "../svg";

function Footer() {
  const today = new Date();

  return (
    <Container fluid >
      <Row >
        <Col className='footer'>
          <h4 className={"socialMedia"}>Dove puoi trovarmi</h4>
          <div className={"i-footer container-fluid"}>
            <i className={"bi bi-facebook"}></i>
            <a className={"socialMedia"} href={instagram.href} target="_blank" rel="noreferrer"
              title="Instagram filyguarrera">{instagram.svg}</a>
            <a className={"socialMedia"} href={email.href}>{email.svg}<i className={"bi bi-envelope-fill"}></i>
            </a>
            <a className={"socialMedia"} href={tiktok.href} target="_blank" rel="noreferrer">
              {tiktok.svg}<i className={"bi bi-tiktok"}></i>
            </a>
          </div>
          <p className={"copyright"}>© Copyright {today.getFullYear()}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;