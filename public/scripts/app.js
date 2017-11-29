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

var userName = "John Nenniger";
var userAge = 25;
var userLocation = "Vancouver, Canada";
var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    userName
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    userAge
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    userLocation
  )
);
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
