import React from "react";
import CakeInfo from "./CakeInfo";

function CardVedi(props) {
  return <div className={"pricing-column col-lg-4 col-md-6"}>
    <div className={"card"}>
      <div className={"card-body"}>
        <h4>{props.data.name}</h4>
        <img className={"pic_size"} src={props.data.image} alt={props.data.alt} />
        <div>
        {/* <Rating
        initialRating={props.data.rating}
          onChange={(rate) => 
            alert(rate)}
        /> */}
        </div>
        <CakeInfo
          button={props.data.button}
          name={props.data.name}
          image={props.data.image}
          alt={props.data.alt}
          description={props.data.description}
          extra={props.data.extra}
        />
      </div>
    </div>
  </div>
}

export default CardVedi;