import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

function CardItem({ data, handleClick, types, typesItem }) {

  const details = () => {

    if (typesItem) {
      const itemsOfTypes = types[typesItem]
      const randomItemOfitemsOfTypes = itemsOfTypes[Math.floor(Math.random() * (itemsOfTypes.length - 1))]
      const extras = randomItemOfitemsOfTypes.fields.extras
      const randomOfExtras = extras[Math.floor(Math.random() * (extras.length - 1))]
      const randompic = "http:" + randomOfExtras.fields.file.url
      return randompic
    }
  }

  return (
    <Card
      className="d-flex"
      onClick={() => handleClick(data)}
    >
      <Link
        to={typesItem === undefined ? null : typesItem}
        className="card-link"
      >
        <Card.Body>
          <Card.Title>{typesItem === undefined ? data.fields.name : typesItem}</Card.Title>
          <Card.Img
            className="card-img"
            variant="bottom"
            src={typesItem === undefined ? "http:" + data.fields.image.fields.file.url : details()}
          />
        </Card.Body>
      </Link>
    </Card>
  )
}

export default CardItem;
