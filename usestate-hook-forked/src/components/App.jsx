import React, { useState } from "react";

//bad way of rendering a component
// function App() {
//   let count = 0;
//   function increase() {
//     count++;

//     ReactDOM.render(
//       <div className="container">
//         <h1>{count}</h1>
//         <button onClick={increase}>+</button>
//       </div>,
//       document.getElementById("root")
//     );
//   }

//   return (
//     <div className="container">
//       <h1>{count}</h1>
//       <button onClick={increase}>+</button>
//     </div>
//   );
// }

function App() {
  const [count, setcount] = useState(0);

  //destructuring

  function increase() {
    setcount(count + 1);
  }
  function decrease() {
    setcount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
