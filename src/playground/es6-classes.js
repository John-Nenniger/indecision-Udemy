class Person {
  constructor(name, age){
    this.name = name || 'Anonymous';
    this.age = age || 0
  }
  getGreeting() {
    return `Hi, I'm ${this.name}`
  }
  getDescription() {
    return `${this.name} is ${this.age} years old`
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription(){
    let description = super.getDescription();
    if (this.major){
      return `${description}, and is a ${this.major} major.`
    } else {
      return description
    }
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting(){
    if (this.homeLocation){
      return `${super.getGreeting()} and I'm from ${this.homeLocation}`
    } else {
      return super.getGreeting();
    }
  }
}

const me = new Person()
console.log(me);

const john = new Traveler("John")
console.log(john);
