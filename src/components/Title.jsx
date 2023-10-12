import React from "react";

function Title({ title, img }) {
  const titleImg = img.items[Math.floor(Math.random() * img.items.length)].fields.image.fields.file.url;
  return <div className="title row align-items-center justify-content-center">
    <div className="col-4 category-title">
      <h3 className="title">{title}</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Sed faucibus turpis in eu mi bibendum. Orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor.</p>
    </div>
    <img
      className="col-4 title-img"
      src={titleImg}
        alt={img.alt}></img>
  </div>
}

export default Title;
