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
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
