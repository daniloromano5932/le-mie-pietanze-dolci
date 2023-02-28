import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ErrorPage() {
  return (
    <div>
      <div className="colored-section">
        <div className="container-fluid">
          <Navbar />
        </div>
      </div>
      <h1 className="error-message">Oh no! La pagina non è stata trovata!</h1>
      <Footer />
    </div>
  )
}

export default ErrorPage;
