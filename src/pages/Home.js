import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { house_heart, chat_heart,  } from '../svg';
import { Col, Row, Container } from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';



function Home() {
  // const totalCakes = HomePageCategories.reduce((accumulator, object) => {
  //   return accumulator + object.total;
  // }, 0);

  return (
      <Container fluid className='home-container'>
        <Row className='home-row p-2' lg={4} md={2} sm={1} xs={1} >
          <Col className='home-col justify-content-center'>
          <img className='home-img' src="images/Torte/IMG_20221123_193434.jpg"></img>
          </Col>
          <Col className='home-col align-me justify-content-center'>
            <div className='home-text'>
              <i className="bi bi-house-heart">{house_heart}</i><br />
              <h4>Fatto in casa</h4>
              <h5>Ingredienti freschi e genuini</h5>
            </div>
          </Col>
          <Col className='home-col justify-content-center'>
            <img className='home-img' src='/images/Crostate/20220205_105049.jpg' alt='immagine crostata alla frutta'></img>
          </Col>
        </Row>

        <Row className='home-row p-2' lg={4} md={2} sm={1} xs={1} >
          <Col className='home-col justify-content-center'>
            <img className='home-img' src='/images/Crostate/20220205_105049.jpg' alt='immagine crostata alla frutta'></img>
          </Col>
          <Col className='home-col justify-content-start'>
            <div className='home-text'>
              <i className="bi bi-chat-heart">{chat_heart}</i>
              <h4>Basta chiedere</h4>
              <h5 >Vorresti una combinazione di una o più pietanze? <br /> Chiedi pure!</h5>
            </div>
          </Col>
        </Row>
      </Container>
  );
}

export default Home;













