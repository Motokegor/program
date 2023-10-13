import React from "react";
import "./header.scss";

export default function (props) {
  const cl = props.color;
  return (
    <div className={cl}>
      <p className="tariff">{props.tariff}</p>
      <hr />
      <h1>{props.price}</h1>
      <p className="speed">{props.speed}</p>
      <div className="text">
      <p className="volume">{props.volume}</p>
      <p className="title">{props.title}</p>
      </div>
    </div>
  );
}
