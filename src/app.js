// import thisIsSubtractButWeCanCallItWhatever, { square, add } from './utils.js';
// import isSenior, { isAdult, canDrink } from './person.js';
// import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';

const l = console.log
l('app.js is running!!!!!!!!!!!');
const template = React.createElement('p', {}, 'Whaddup')

ReactDOM.render(template, document.getElementById('app'))
