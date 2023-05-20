import React from "react";
import Navbar from "../components/Navbar";
import Title from "../components/Title";
import Footer from "../components/Footer";
import CardVedi from "../components/CardVedi";
import { useParams } from 'react-router-dom';
import data from "../data";
import Error from "./Error";

function Category() {

  const { category } = useParams();
  const products = data[category];

  if (!products) {
    return <Error />
  }

  return (
    <div className="torte-component">
      <div className="colored-section">
        <div className="container-fluid">
          <Navbar />
          <Title title={category} />
          <h5 className='total-cakes'>Per un totale di {products.length}</h5>
        </div>
      </div>
      <div className="row cards-section">
        {products.map((item) => (
          <CardVedi
            key={item.id}
            data={item}
          />
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Category;
