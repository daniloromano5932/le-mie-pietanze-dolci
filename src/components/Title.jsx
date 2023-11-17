import React from "react";

function Title({ title }) {

  return <div className="title row align-items-center justify-content-center">
    <div className="col-4 category-title">
      <h1 className="title">{title}</h1>
    </div>
  </div>
}

export default Title;
