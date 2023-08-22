import Form from 'react-bootstrap/Form';
import { data } from "../data"
import { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Card from '../components/Card';
import Pages from '../components/Pagination';

function Search() {
  const [activePage, setActivePage] = useState(1)

  function handlePageChange(newPageNumber) {
    setActivePage(newPageNumber)
  }

  const items = Object.values(data).flat();
  const [searchResults, setSearchResults] = useState(items);
  const itemsPerPage = 10;
  const endIndex = activePage * itemsPerPage;
  const startIndex = endIndex - itemsPerPage;
  const searchItemsToShow = searchResults.slice(startIndex, endIndex)

  function handleChange(e) {
    const searchWord = e.target.value
    if (searchWord) {
      setSearchResults(items.filter((item) => JSON.stringify(item).includes(searchWord)));
    } else {
      setSearchResults(items)
    }
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
        {searchItemsToShow.length === 0 && <h3 className="no-results">Sembra che non ci siano risultati per la tua ricerca</h3>}
          <Row lg={4} md={2} sm={1} xs={1} className="categories-cards align-items-center justify-content-center">
            {searchItemsToShow.map((result) => (
              <Col
                key={result.name}
              >
                <Card
                  data={result}
                />
              </Col>
            ))}
          </Row>
          <Pages
            handlePageChange={handlePageChange}
            activePage={activePage}
            lastPage={Math.ceil(items.length / itemsPerPage)}
          />
        </Container>
      </div>
     
    </div>
  );
}

export default Search;