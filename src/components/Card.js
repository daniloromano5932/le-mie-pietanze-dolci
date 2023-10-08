import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

function CakeCard({ data, handleClick }) {
  const { href, name, image, alt } = data;
  return (
    <Card
      className="d-flex"
      onClick={() => handleClick(data)}
    >
      <Link
        to={href}
        className="card-link"
      >
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Img
            className="card-img"
            variant="bottom"
            src={"../" + image}
            alt={alt}
          />
        </Card.Body>
      </Link>
    </Card>
  )
}

export default CakeCard;