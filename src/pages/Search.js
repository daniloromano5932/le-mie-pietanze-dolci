import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import data from "../data"


function Search() {
console.log(data)

  return (
    <div>
      <Navbar/>
 
    <div className='search'>
    <h4>Cerca il tuo dolce</h4>
    <Form className="d-flex">
    <Form.Control
      type="search"
      placeholder="Cerca..."
      className="me-4"
      aria-label="Search"
    />
    <Button variant="outline-success">Cerca</Button>
  </Form>
  </div>
  <Footer/>
  </div>
  );
}

export default Search;