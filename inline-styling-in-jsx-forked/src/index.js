import React from "react";
import ReactDOM from "react-dom";

const value = {
  color: "blue",
  fontSize: "20px",
  border: "5px solid black"
};

ReactDOM.render(
  <div>
    <h1 style={{ color: "red" }}> Hello World!</h1>
    {/* here in above inline css we directly pass the value inside the tag */}
    <h1 style={value}>my name is vivek</h1>
    {/* here we actually passed the object through a variable assigning multiple properties */}
  </div>,
  document.getElementById("root")
);
