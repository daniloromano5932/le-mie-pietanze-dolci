import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

function CakeCard({ data, handleClick }) {
  return (
    <Card
      className="d-flex"
      onClick={() => handleClick(data)}
    >
      <Link
        // to={href}
        className="card-link"
      >
        <Card.Body>
          <Card.Title>{data.fields.name}</Card.Title>
          <Card.Img
            className="card-img"
            variant="bottom"
            src={data.fields.image.fields.file.url}
            // alt={alt}
          />
        </Card.Body>
      </Link>
    </Card>
  )
}

export default CakeCard;