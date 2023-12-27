import React from "react";
import emojipedia from "../emojipedia";
import Card from "./Card";

function createcard(emojidataa) {
  return (
    <Card
      key={emojidataa.id}
      emoji={emojidataa.emoji}
      typename={emojidataa.name}
      means={emojidataa.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(createcard)};</dl>
    </div>
  );
}

export default App;
