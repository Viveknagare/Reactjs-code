import React from "react-dom";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2>{props.name}</h2>
        <img className="circle-img " src={props.link} alt={props.alternate} />
      </div>
      <div className="bottom">
        <p>{props.phone}</p>
        <p>{props.mail}</p>
      </div>
    </div>
  );
}

export default Card;
