import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Home from './pages/Home';
import Category from './pages/Category';
import Categories from './pages/Categories';
import Error from './pages/Error';
import Search from './pages/Search';
import Navbar from './components/Navbar';
import Footer from "./components/Footer"

function App() {
  
  return (
    <BrowserRouter>
      <Navbar />
      <main className='main'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/categories/:category' element={<Category />} />
          <Route path='/error' element={<Error />} />
          <Route path="/search" element={<Search />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
