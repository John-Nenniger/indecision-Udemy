"use strict";

console.log("app.js is running");

function getLocation(location) {
  if (location) {
    return React.createElement(
      "p",
      null,
      " Location: ",
      location,
      " "
    );
  } else {
    return undefined;
  }
}

var user = {
  name: "John",
  age: 25,
  location: "Vancouver"
  // let and const are block scoped, var is functionally scoped
  // (it gets hoisted into the surrounding function)
};var count = 0;
var addOne = function addOne() {
  count++;
  renderCounterApp();
};
var minusOne = function minusOne() {
  count--;
  renderCounterApp();
};
var reset = function reset() {
  count = 0;
  renderCounterApp();
};

// ternary operator condition ? "what happens if true" : "what happens if false"

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Count: ",
      count
    ),
    React.createElement(
      "button",
      { onClick: addOne },
      "+1"
    ),
    React.createElement(
      "button",
      { onClick: minusOne },
      "-1"
    ),
    React.createElement(
      "button",
      { onClick: reset },
      "reset"
    )
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
