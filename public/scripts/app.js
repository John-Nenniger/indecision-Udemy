"use strict";

console.log("build_it.js is running");
var appRoot = document.getElementById('app');
var detailVisibility = true;
var details = void 0;

var build = {
  title: "Visibility Toggle",
  details: "All you need is scones.  #scones #scones.party",
  show: "Show Details"
};

var Details = function Details() {
  if (details) {
    details = undefined;
    build.show = "Show Details";
    renderBuildIt();
  } else {
    details = React.createElement(
      "p",
      null,
      build.details
    );
    build.show = "Hide Details";
    renderBuildIt();
  }
};

var renderBuildIt = function renderBuildIt() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      build.title
    ),
    React.createElement(
      "button",
      { onClick: Details, id: "show" },
      build.show
    ),
    details
  );
  ReactDOM.render(template, appRoot);
};

renderBuildIt();
