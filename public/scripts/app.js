"use strict";

console.log("app.js is running");

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "This is JSX rendered by app.js"
  ),
  React.createElement(
    "p",
    null,
    "sup"
  )
);

var user = {
  name: "John Nenniger",
  age: 25,
  location: "Vancouver"
};

var userName = "John Nenniger";
var userAge = 25;
var userLocation = "Vancouver, Canada";
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    user.location
  )
);
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
