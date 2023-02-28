import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function CarouselItem(props) {
  return <Carousel variant="dark">
    {props.item.map((item) => (
   <Carousel.Item>
   <img
     className={"big-pic"}
     src={item} />
 </Carousel.Item>
   ))}
  </Carousel>
}

export default CarouselItem;