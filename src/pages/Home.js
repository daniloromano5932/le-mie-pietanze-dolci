import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { house_heart, chat_heart, } from '../constants';
import { Col, Row, Container } from 'react-bootstrap';
import { data } from "../data";

function Home() {

  return (
    <Container fluid className='home-container'>
      <Row className='home-row p-2' lg={4} md={2} sm={1} xs={1} >
        <Col className='home-col align-me justify-content-center'>
          <div className='home-text'>
            <i className="bi bi-house-heart">{house_heart}</i><br />
            <h5>Fatto in casa</h5>
            <p>Ingredienti freschi e genuini</p>
          </div>
        </Col>
        <Col className='home-col justify-content-center'>
          <img
            className='home-img'
            src={"/" + data.Crostate[Math.floor(Math.random() * data.Crostate.length)].image}
            alt='immagine crostata alla frutta'
          />
        </Col>
      </Row>

      <Row className='home-row p-2' lg={4} md={2} sm={1} xs={1} >
        <Col className='home-col'>
          <img
            className='home-img'
            src={"/" + data.Torte[Math.floor(Math.random() * data.Torte.length)].image}
            alt='immagine crostata alla frutta'
          >
          </img>
        </Col>
        <Col className='home-col'>
          <div className='home-text'>
            <i className="bi bi-chat-heart">{chat_heart}</i>
            <h5>Basta chiedere</h5>
            <p>Vorresti una combinazione di una o più pietanze? <br /> Chiedi pure!</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
