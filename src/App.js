import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Container, Row, Col } from "react-bootstrap";

function App() {
  // const totalCakes = HomePageCategories.reduce((accumulator, object) => {
  //   return accumulator + object.total;
  // }, 0);

  return (
    <div className={"App"}>
      <Container className='features'>
        <Row className='row1'>
          <Col className='feature'>
            <div className="text-center">
              <i className="bi bi-house-heart"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-house-heart" viewBox="0 0 16 16">
                <path d="M8 6.982C9.664 5.309 13.825 8.236 8 12 2.175 8.236 6.336 5.309 8 6.982Z" />
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.707L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.646a.5.5 0 0 0 .708-.707L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
              </svg></i><br />
              <h4 className="features-title">Fatto in casa</h4>
              <h5 className="features-txt">Ingredienti freschi e genuini</h5>
            </div>
          </Col>
          <Col className='feature'>
            <img src='/images/Crostate/20220205_105049.jpg' className='home-page-img' alt='immagine crostata alla frutta'></img>
          </Col>
        </Row>
        <Row className='row2'>
          <Col className='feature'>
            <img src='/images/Torte/WhatsApp Image 2022-12-27 at 9.53.05 PM.jpeg' className='home-page-img' alt='immagine torta personalizzata'></img>
          </Col>
          <Col className='feature'>
            <div className=" text-center ">
              <i className="bi bi-chat-heart"><svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-chat-heart" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2.965 12.695a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2Zm-.8 3.108.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125ZM8 5.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
              </svg></i>
              <h4 className="features-title">Basta chiedere</h4>
              <h5 className="features-txt">Vorresti una combinazione di una o più pietanze? <br /> Chiedi pure!</h5>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;













