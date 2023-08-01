import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY > 90) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener("scroll", changeBackground);

  return <nav className={`navbar navbar navbar-expand-xxl navbar-light bg-light ${navbar ? "sticky" : ""}`}>
  <h6 className="navbar-logo">DolcidiFily</h6>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse ropdown-menu dropdown-menu-right" id="navbarSupportedContent">
  <div className="navbar-nav">
         <a className="nav-link navbar-brand" href="/">Home</a>
         <a className="nav-link navbar-brand" href="/categories">Dolci</a>
         <a className={"nav-link navbar-brand"} href="#footer">Contattami</a>
         <Link to="/search" className={"nav-link navbar-brand"}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
           <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
         </svg></Link>
       </div>
  </div>
</nav>
}

export default Navbar;