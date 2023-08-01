import React from "react";
import Title from "../components/Title";
import Card from "../components/Card";
import { useParams } from 'react-router-dom';
import { data } from "../data";
import Error from "./Error";
import { Container, Row, Col } from "react-bootstrap";


function Category() {

  const { category } = useParams();
  const products = data[category];

  if (!products) {
    return <Error />
  }

  return (
    <div className="torte-component align-items-center justify-content-center ">
      <div className=" d-flex row colored-section align-items-center justify-content-center">
        <div className="align-items-center justify-content-center title-section">
          <Title
            title={category}
            img={products}
          />
          <h5 className='total-cakes'>Per un totale di {products.length}</h5>
        </div>
      </div>
      <div className="test align-items-center justify-content-center">
        <Container className="colored-section align-items-center justify-content-center">
          <Row lg={4} md={2} sm={1} xs={1} className="categories-cards align-items-center justify-content-center">
            {products.map((item) => (
              <Col>
                <Card
                  key={item.id}
                  data={item}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Category;
