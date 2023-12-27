import React from "react";
import ReactDOM from "react-dom";
import Pii, { doublepi, triplepi } from "./math";

// here abive as pi in math module is exported as default here we can import it by any name
// note only one default value can be exported
// the export with no default here in case doublepi triplepi , its name cannot be changed while importing

ReactDOM.render(
  <ul>
    <li>{Pii}</li>
    <li>{doublepi()}</li>
    <li>{triplepi()}</li>
  </ul>,
  document.getElementById("root")
);

//using wildcard
// import React from "react";
// import ReactDOM from "react-dom";
// import * as pi from "./math";

//the above line says import *(everything) from math.js as pi
//this will return javascript object in form of key value pair
//then you can access the properties of it using the . operator

// console.log(pi);

// ReactDOM.render(
//   <ul>
//     <li>{pi.default}</li>
//     <li>{pi.doublepi()}</li>
//     <li>{pi.triplepi()}</li>
//   </ul>,
//   document.getElementById("root")
// );
