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

function createOptions(options) {
  if (options.length > 0) {
    return "Here are your options: " + options;
  } else {
    return "No options";
  }
}

var app = {
  title: "Spork",
  subtitle: "cutlery?",
  options: ['One', 'Two']
};

console.log(app.subtitle);
var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  true && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "p",
    null,
    createOptions(app.options)
  )
);

var user = {
  name: "John",
  age: 25,
  location: "Vancouver"
};

var templateTwo = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : "Anonymous"
  ),
  false,
  user.age && user.age >= 18 && React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  getLocation(user.location)
);

// ternary operator condition ? "what happens if true" : "what happens if false"


var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
