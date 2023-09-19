import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Container, Row, Col, Nav } from "react-bootstrap";
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from './pages/Category';
import Categories from './pages/Categories';
import Error from './pages/Error';
import Search from './pages/Search';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Footer3 from "./components/Footer3"

function App() {
  // const totalCakes = HomePageCategories.reduce((accumulator, object) => {
  //   return accumulator + object.total;
  // }, 0);

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/categories/:category' element={<Category />} />
        <Route path='/error' element={<Error />} />
        <Route path="/search" element={<Search />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
      <Footer3/>
    </BrowserRouter>
  );
}

export default App;













