import Form from 'react-bootstrap/Form';
import { data } from "../data"
import { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Card from '../components/Card';


function Search() {

  const items = Object.values(data).flat();
  const [searchResults, setSearchResults] = useState([]);

  function handleChange(e) {
    const text = e.target.value
    setSearchResults(items.filter((item) => item.colors.map((singleColor) => singleColor.toLowerCase()).includes(text.toLowerCase())
      || item.occasions.map((singleOccasion) => singleOccasion.toLowerCase()).includes(text.toLowerCase())
      || item.name.toLowerCase().includes(text.toLowerCase())
      || item.ingredients.map((singleIngredient) => singleIngredient.toLowerCase()).includes(text.toLowerCase())
      || item.keywords.map((singleKeyword) => singleKeyword.toLowerCase()).includes(text.toLowerCase())
      || item.audience.map((singleAudience) => singleAudience.toLowerCase()).includes(text.toLowerCase())))
  }

  return (
    <div className='d-flex align-items-center justify-content-center'>
      <div className='search'>
        <h1>Cerca il tuo dolce</h1>
        <Form className="">
          <Form.Control
            type="search"
            placeholder="Cerca..."
            className="me-4"
            aria-label="Search"
            onChange={handleChange}
          />
        </Form>
        <Container className="colored-section">
          <Row lg={4} xl={4} md={4} xxl={4} className="categories-cards align-items-center justify-content-center">
            {!searchResults ? items.map((item) => {
              return <Col><Card
                key={Math.random()}
                data={item}
              />
              </Col>
            }) : searchResults.map((result) => {
              return <Col><Card
                key={Math.random()}
                data={result}
              />
              </Col>
            })}
          </Row>


        </Container>


        {/* <div className="row cards-section d-flex align-items-center justify-content-center" id='padding-footer'>
          {searchResults.map((result) => {
            return <Card
              key={Math.random()}
              data={result}
            />
          })}
        </div> */}
      </div>
    </div>
  );
}

export default Search;