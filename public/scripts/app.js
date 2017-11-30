'use strict';

console.log("app.js is running");
var appRoot = document.getElementById('app');

var app = {
  title: 'Indecision App',
  subtitle: 'Let me, a robot decide for you.',
  options: []
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

var numbers = [99, 98, 97, 95];

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
    ),
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          ' Option: ',
          option
        );
      })
    )
  );

  ReactDOM.render(template, appRoot);
};
renderIndecision();
