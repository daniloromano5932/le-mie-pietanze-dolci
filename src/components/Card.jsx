import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import CakeInfo from "./CakeInfo";
import { useParams } from "react-router-dom";

function CardApri(props) {

  const { category } = useParams();

  return <Card className="d-flex">
    <Link to={props.data.href} className="card-link">
      <Card.Img className="card-img" variant="bottom" src={"../" + props.data.image} alt={props.data.alt} />
      <Card.Body>
        <Card.Title>{props.data.name}</Card.Title>
        {category !== undefined ?
          <CakeInfo
            button={props.data.button}
            name={props.data.name}
            image={props.data.image}
            alt={props.data.alt}
            description={props.data.description}
            extra={props.data.extra}
          /> : null}
      </Card.Body>
    </Link>
  </Card>
}

export default CardApri;