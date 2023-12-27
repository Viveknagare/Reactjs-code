import React from "react";
import ReactDOM from "react-dom";
var num = 7;
var fname = "vivek";
var lname = "nagare";
ReactDOM.render(
  <div>
    <h1>Hello {fname + " " + lname}!</h1>
    //or
    <h1>
      {" "}
      hello {fname} {lname}!
    </h1>
    <p> your lucky number is {num}</p>
    <p>your lucky number is {Math.floor(Math.random() * 100)} </p>
  </div>,
  document.getElementById("root")
);
