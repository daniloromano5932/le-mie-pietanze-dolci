import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import Card from "../components/Card";
import {data} from "../data"
import { useParams } from 'react-router-dom';
import Error from "./Error";
import { Container, Row, Col } from "react-bootstrap";
import CakeInfo from "../components/CakeInfo";
import Pages from "../components/Pagination"
import contentfulClient from "../contentful"

function Category() {
  const { category } = useParams();
  const [cakeData, setCakeData] = useState(null)
  const [activePage, setActivePage] = useState(1)
  const [cardClicked, setCardClicked] = useState(null);


  const products = data[category]

  useEffect(() => {
    contentfulClient.getEntries({
      content_type: 'cake',
      "fields.title": category
    })
      .then((res) => setCakeData(res))
      .catch(console.error)
  }, [])

  if (!cakeData) {
    return <Error />
  }
  


  function handlePageChange(newPageNumber) {
    setActivePage(newPageNumber)
  }

  

  const itemsPerPage = 10;
  const endIndex = activePage * itemsPerPage;
  const startIndex = endIndex - itemsPerPage;
  const searchItemsToShow = cakeData.items.slice(startIndex, endIndex)
  const handleClose = () => setCardClicked(null);




  function handleCardClick(cardData) {
    setCardClicked(cardData)
  }

  console.log("products", cakeData)

  return (
    <div className="torte-component align-items-center justify-content-center ">
      <div className=" d-flex row colored-section align-items-center justify-content-center">
        <div className="align-items-center justify-content-center title-section">
          <Title
            title={category}
            img={cakeData}
          />
        </div>
      </div>
      <div className="test align-items-center justify-content-center">
        <Container className="colored-section align-items-center justify-content-center">
          <Row
            lg={4}
            md={2}
            sm={1}
            xs={1}
            className="categories-cards align-items-center justify-content-center"
            >
            {searchItemsToShow.map((item) => (
              <Col key={item.sys.id}>
                <Card 
                  data={item}
                  handleClick={handleCardClick}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      {cardClicked && (
        <CakeInfo
          show={Boolean(cardClicked)}
          name={cardClicked.fields.name}
          // alt={cardClicked.alt}
          // description={cardClicked.description}
          extras={cardClicked.fields.extras}
          handleClose={handleClose}
          img={cardClicked.fields.image.fields.file.url}
        />
      )}
      <Pages
        className="pagination"
        handlePageChange={handlePageChange}
        activePage={activePage}
        lastPage={Math.ceil(cakeData.items.length / itemsPerPage)}
      />
    </div>
  )
}

export default Category;
