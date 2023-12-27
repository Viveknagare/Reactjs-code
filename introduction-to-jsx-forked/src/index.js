var React = require("react");
var ReactDom = require("react-dom");

ReactDom.render(
  <div>
    <h1> Hello vivek </h1>
    <p> I am studying in 3rd year</p>
  </div>,

  document.getElementById("root")
);

var h1 = document.createElement("h1");
h1.innerHTML = "HEllo vivek";
document.getElementById("root").appendChild(h1);
