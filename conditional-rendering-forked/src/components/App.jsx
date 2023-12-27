import React from "react";
import Login from "./Login";

var isLoggedin = false;
const time = new Date(2019, 11, 14, 14).getHours();

// new Date(year,month,hours,time)

// function conditionalrender() {
//   isLoggedin ? <h1>Hello everyone</h1> : <Login />;
// }

function App() {
  return (
    <div className="container">
      <h1>Hello</h1>
      {/* {isLoggedin ? <h1>Hello everyone</h1> : <Login />}; */}
      {/* {time > 12 ? <h1>why are you still working</h1> : null} */}
      {/* or */}
      {time > 12 && <h1>why are you still working</h1>}
    </div>
  );
}

export default App;
