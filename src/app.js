import thisIsSubtractButWeCanCallItWhatever, { square, add } from './utils.js';
import isSenior, { isAdult, canDrink } from './person.js';

const l = console.log
l('app.js is running!!!!!!!!!!!');
l(square(3))
l(add(100, 45))
l(isAdult(12))
l(canDrink(23))
l(thisIsSubtractButWeCanCallItWhatever(1242, 536))
l(isSenior(45))
l(isSenior(72))
