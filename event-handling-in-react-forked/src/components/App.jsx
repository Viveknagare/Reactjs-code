import React, { useState } from "react";

function App() {
  const [isMouseOver, setisMouseOver] = useState(false);
  function mouseover() {
    setisMouseOver(true);
  }

  function mouseout() {
    setisMouseOver(false);
  }

  const [headingText, setHeadingText] = useState("hello");
  function clicked() {
    setHeadingText("submitted");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
        onMouseOver={mouseover}
        onMouseOut={mouseout}
        onClick={clicked}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
