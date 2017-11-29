//arguments object


// arrow functions don't bind their this to the current function, it is hoisted

const multiplier = {
  numbers: [1,3,4,5,27,89],
  multiplyBy: 4,
  multiply(){
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply())




console.log('donzo')
