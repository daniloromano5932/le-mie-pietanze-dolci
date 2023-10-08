import React, { useState } from "react";
import Title from "../components/Title";
import Card from "../components/Card";
import { useParams } from 'react-router-dom';
import { data } from "../data";
import Error from "./Error";
import { Container, Row, Col } from "react-bootstrap";
import CakeInfo from "../components/CakeInfo";
import Pages from "../components/Pagination"
import contentfulClient from "../contentful"

function Category() {
  const { category } = useParams();
  const products = data[category];

  contentfulClient.getEntries({
    'fields.type': category,
    content_type: 'rotoli'
  })
    .then((contentType) => console.log(contentType))
    .catch(console.error)

  const [activePage, setActivePage] = useState(1)

  function handlePageChange(newPageNumber) {
    setActivePage(newPageNumber)
  }

  const itemsPerPage = 10;
  const endIndex = activePage * itemsPerPage;
  const startIndex = endIndex - itemsPerPage;
  const searchItemsToShow = products.slice(startIndex, endIndex)
  const [cardClicked, setCardClicked] = useState(null);
  const handleClose = () => setCardClicked(null);

  if (!products) {
    return <Error />
  }

  function handleCardClick(cardData) {
    setCardClicked(cardData)
  }

  return (
    <div className="torte-component align-items-center justify-content-center ">
      <div className=" d-flex row colored-section align-items-center justify-content-center">
        <div className="align-items-center justify-content-center title-section">
          <Title
            title={category}
            img={products}
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
              <Col key={item.id}>
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
          name={cardClicked.name}
          alt={cardClicked.alt}
          description={cardClicked.description}
          extra={[cardClicked.image, ...cardClicked.extra]}
          handleClose={handleClose}
        />
      )}
      <Pages
        className="pagination"
        handlePageChange={handlePageChange}
        activePage={activePage}
        lastPage={Math.ceil(products.length / itemsPerPage)}
      />
    </div>
  )
}

export default Category;
