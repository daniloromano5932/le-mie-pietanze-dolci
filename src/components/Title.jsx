import React from "react";

function Title(props) {
  return <div className="title row align-items-center justify-content-center">
    <div className="col-4 category-title">
      <h1 className={"title"}>{props.title}</h1>
      <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Sed faucibus turpis in eu mi bibendum. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor.</h5>
    </div>
    <img
      className="col-4 title-img"
      src={"../" + props.img[Math.floor(Math.random() * props.img.length)].image}
      alt={props.alt}></img>
  </div>
}

export default Title;