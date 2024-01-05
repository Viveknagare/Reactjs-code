import React, { useState } from "react";

function App() {
  const [name, setname] = useState("");
  const [heading, setheading] = useState("");

  function trackchange(event) {
    setname(event.target.value);
  }
  function trackclick(event) {
    setheading(name);
    event.preventDefault();
  }

  return (
    <form onSubmit={trackclick}>
      <div className="container">
        <h1>hello {heading}</h1>
        <input
          onChange={trackchange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default App;
