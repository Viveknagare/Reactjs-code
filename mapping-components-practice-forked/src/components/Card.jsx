import React from "react";

function Card(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emoji}
        </span>
        <span>{props.typename}</span>
      </dt>
      <dd>{props.means}</dd>
    </div>
  );
}

export default Card;
