import HomePageCategories from "../data/HomePageCategories"
import { Container, Row, Col } from "react-bootstrap";
import Card from "../components/Card";

function Categories() {
  return (
    <Container className="colored-section">
      <Row lg={4} md={2} sm={1} xs={1} className="categories-cards align-items-center justify-content-center">
        {HomePageCategories.map((category) => (
          <Col key={category.id}>
            <Card
              data={category}
              handleClick={() => {}}
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Categories;
