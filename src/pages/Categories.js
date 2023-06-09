import HomePageCategories from "../data/HomePageCategories"
import { Container, Row, Col} from "react-bootstrap";
import Card from "../components/Card";


function Categories() {
  return (
      <div className="test">
    <Container className="colored-section">
           <Row lg={4} xl={5} md={4} xxl={5} className="categories-cards align-items-center justify-content-center">
             {HomePageCategories.map((category) => (
              <Col>
               <Card
                 key={category.id}
                 data={category}
               />
               </Col>
             ))}
           </Row>
      </Container>
      </div>
  )
}

export default Categories;





// 