import React from "react";
import { Link } from "react-router-dom";

function CardApri(props) {


  return <div className={"pricing-column col-lg-4 col-md-6"}>
    <div className={"card"}>
      <div className={"card-body"}>
        <h4>{props.data.name}</h4>
        <p>{props.data.total}</p>
        <img className={"pic_size"} src={props.data.image} alt={props.data.alt} />
        <Link to={props.data.href}><button type="button" className={"btn btn-outline-dark"}>{props.data.button}</button>
        </Link>
      </div>
    </div>
  </div>
}

export default CardApri;