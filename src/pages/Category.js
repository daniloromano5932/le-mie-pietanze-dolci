import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import contentfulClient from "../contentful"
import Loading from "./Loading";
import Title from "../components/Title";
import CardItem from "../components/CardItem";
import CakeInfo from "../components/CakeInfo";
import Pages from "../components/Pagination"

function Category() {
  const { category } = useParams();
  const [cakeData, setCakeData] = useState(null)
  const [activePage, setActivePage] = useState(1)
  const [cardClicked, setCardClicked] = useState(null);

  useEffect(() => {
    contentfulClient.getEntries({
      content_type: 'cake',
      "fields.type": category,
      limit: 1000
    })
      .then((res) => setCakeData(res))
      .catch(console.error)
  }, [])

  if (!cakeData) {
    return <Loading />
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

  return (
    <div className="align-items-center justify-content-center">
      <div className="d-flex row colored-section align-items-center justify-content-center">
        <div className="align-items-center justify-content-center title-section">
          <Title
            title={category}
          />
        </div>
      </div>
      <div className="align-items-center justify-content-center">
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
                <CardItem
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
        handlePageChange={handlePageChange}
        activePage={activePage}
        lastPage={Math.ceil(cakeData.items.length / itemsPerPage)}
      />
    </div>
  )
}

export default Category;
