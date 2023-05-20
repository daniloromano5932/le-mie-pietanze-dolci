import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./pages/Category";
import Error from "./pages/Error";
import Search from './pages/Search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path=':category' element={<Category />} />
      <Route path='/error' element={<Error />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  </BrowserRouter>
);

