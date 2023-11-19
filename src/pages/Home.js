import { Col, Row, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import contentfulClient from "../contentful"
import houseHeart from '../assets/svg/houseHeart.svg';
import chatHeart from "../assets/svg/chatHeart.svg";
import Loading from './Loading';

function Home() {

  const [data, setData] = useState(null);

  useEffect(() => {
    contentfulClient.getEntries({
      content_type: 'cake',
      limit: 1000
    })
      .then((res) => setData(res))
      .catch(console.error)
  }, [])

  if (!data) {
    return <Loading />
  }

  return (
    <Container fluid className='home-container'>
      <Row className='home-row'
        lg={4}
        md={2}
        sm={1}
        xs={1}>
        <Col className='home-col justify-content-center'>
          <div className='home-text'>
            <i className="bi bi-house-heart">
              <img
                src={houseHeart}
                alt='casa col cuore'
                className='home-icon'
              />
            </i><br />
            <h5>Fatto in casa</h5>
            <p>Ingredienti freschi e genuini</p>
          </div>
          <div className='home-text-2'>
            <i className="bi bi-chat-heart">
              <img
                src={chatHeart}
                alt='vignetta col cuore'
                className='home-icon'
              />
            </i>
            <h5>Basta chiedere</h5>
            <p>Vorresti una combinazione di una o più pietanze?
              <br /> Chiedi pure!</p>
          </div>

        </Col>
        <Col className='home-col justify-content-center'>
          <img
            className='home-img'
            src="http:///images.ctfassets.net/hbnu18icn124/220ukPiw7s8UO6Qz4YhoRJ/282d4c61601b36abf4769789af473834/Torta-57-a"
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
