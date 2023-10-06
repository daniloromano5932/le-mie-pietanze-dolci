import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

function CardApri(props) {
  return (
    <Card className="d-flex" onClick={() => props.handleClick(props.data)}>
      <Link to={props.data.href} className="card-link">
        <Card.Body>
          <Card.Title>{props.data.name}</Card.Title>
          <Card.Img
            className="card-img"
            variant="bottom"
            src={"../" + props.data.image}
            alt={props.data.alt}
          />
        </Card.Body>
      </Link>
    </Card>
  )
}

export default CardApri;
