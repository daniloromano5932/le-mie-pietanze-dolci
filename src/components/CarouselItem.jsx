import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function CarouselItem(props) {
  return <Carousel variant="dark" touch="yes">
    {props.item.map((item) => (
      <Carousel.Item
        key={item}>
        <img
          className={"big-pic"}
          src={"../" + item} />
      </Carousel.Item>
    ))}
  </Carousel>
}

export default CarouselItem;