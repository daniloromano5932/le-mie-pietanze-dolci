import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import contentfulClient from "../contentful"
import Loading from "./Loading";
import CardItem from "../components/CardItem";

function Categories() {

  const [categories, setCategories] = useState(null);

  useEffect(() => {
    contentfulClient.getEntries({
      content_type: 'cake',
      limit: 1000
    })
      .then((res) => setCategories(res.items))
      .catch(console.error)
  }, [])

  if (!categories) {
    return <Loading />
  }

  const types = categories.reduce((obj, item) => {
    if (!obj[item.fields.type]) {
      obj[item.fields.type] = [item]
    } else {
      obj[item.fields.type].push(item);
    }
    return obj
  }, {})

  const typesItems = Object.keys(types);

  return (
    <Container className="colored-section">
      <Row
        lg={4}
        md={2}
        sm={1}
        xs={1}
        className="categories-cards align-items-center justify-content-center"
      >
        {typesItems.map((item) => (
          <Col key={item}>
            <CardItem
              handleClick={() => { }}
              typesItem={item}
              types={types}
            />
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Categories;
