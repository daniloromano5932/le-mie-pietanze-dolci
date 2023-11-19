import { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import contentfulClient from "../contentful"
import CardItem from '../components/CardItem';
import Pages from '../components/Pagination';
import CakeInfo from '../components/CakeInfo';

function Search() {
  const [activePage, setActivePage] = useState(1)
  const [cardClicked, setCardClicked] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [hasUserSearched, setHasUserSearched] = useState(false)

  function handlePageChange(newPageNumber) {
    setActivePage(newPageNumber)
  }

  function handleCardClick(cardData) {
    setCardClicked(cardData)
  }

  const handleClose = () => setCardClicked(null);

  const itemsPerPage = 10;
  const endIndex = activePage * itemsPerPage;
  const startIndex = endIndex - itemsPerPage;
  const searchItemsToShow = searchResults.slice(startIndex, endIndex)

  function handleChange(e) {
    setHasUserSearched(true);
    const searchWord = e.target.value
    if (searchWord) {
      contentfulClient.getEntries({
        'query': searchWord
      }).then((res) => {
        setSearchResults(res.items);
      })      
    } else {
      setSearchResults([])
    }
  }

  return (
    <div className='search align-items-center justify-content-center container'>
      <h1>Cerca il tuo dolce</h1>
      <div className=''>
        <Form>
          <Form.Control
            type="search"
            placeholder="Cerca..."
            aria-label="Search"
            onChange={handleChange}
          />
        </Form>
      </div>
      <div>
        <Container>
          {hasUserSearched && searchItemsToShow.length === 0 && (
            <h3 className="no-results">
              Sembra che non ci siano risultati per la tua ricerca
            </h3>
          )}
          <Row
            lg={4}
            md={2}
            sm={1}
            xs={1}
            className="categories-cards align-items-center justify-content-center"
          >
            {searchItemsToShow.map((result) => (
              <Col key={result.fields.name}
              >
                <CardItem
                  data={result}
                  handleClick={handleCardClick}
                  key={result.name}
                />
              </Col>
            ))}
          </Row>
          {cardClicked && (
            <CakeInfo
              show={Boolean(cardClicked)}
              name={cardClicked.fields.name}
              // alt={cardClicked.alt}
              // description={cardClicked.description}
              extras={cardClicked.fields.extras}
              handleClose={handleClose}
            />
          )}
          {searchItemsToShow.length > 1 && <Pages
            handlePageChange={handlePageChange}
            activePage={activePage}
            lastPage={Math.ceil(searchResults.length / itemsPerPage)}
          />}
        </Container>
      </div>
    </div>
  );
}

export default Search;
