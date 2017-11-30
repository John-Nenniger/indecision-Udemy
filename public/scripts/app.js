'use strict';

console.log("app.js is running");

var app = {
  title: 'Indecision App',
  subtitle: 'Let me, a robot decide for you.',
  options: [' One', ' Two', ' Three', ' fer']
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if (option) {
    app.options.push(' ' + option);
    e.target.elements.option.value = '';
    renderIndecision();
  }
};

var removeAll = function removeAll() {
  app.options = [];
  renderIndecision();
};
// ternary operator condition ? "what happens if true" : "what happens if false"

var appRoot = document.getElementById('app');

var renderIndecision = function renderIndecision() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    true && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your options : ' + app.options : "No options"
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    ),
    React.createElement(
      'button',
      { onClick: removeAll },
      'Remove All'
    )
  );

  ReactDOM.render(template, appRoot);
};
renderIndecision();
