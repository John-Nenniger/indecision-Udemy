class Counter extends React.Component {
  constructor(props){
    super(props)
    this.addOne = this.addOne.bind(this)
    this.minusOne = this.minusOne.bind(this)
    this.reset = this.reset.bind(this)
  }
  addOne(){
    console.log("addOne")
  }
  minusOne(){
    console.log("minusOne")
  }
  reset(){
    console.log("reset")
  }
  render(){
    return <div>
            <h1>Count: </h1>
            <button onClick={this.addOne}>+1</button>
            <button onClick={this.minusOne}>-1</button>
            <button onClick={this.reset}>Reset</button>
        </div>
  }

}

ReactDOM.render(<Counter />, document.getElementById('app'))


// console.log("app.js is running")
//
// function getLocation(location){
//   if(location){
//     return <p> Location: {location} </p>
//   } else {
//     return undefined
//   }
// }
//
// const user = {
//   name: "John",
//   age: 25,
//   location: "Vancouver"
// }
// // let and const are block scoped, var is functionally scoped
// // (it gets hoisted into the surrounding function)
// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// }
// const minusOne = () => {
//   count--;
//   renderCounterApp();
// }
// const reset = () => {
//   count = 0;
//   renderCounterApp();
// }
//
// // ternary operator condition ? "what happens if true" : "what happens if false"
//
// const appRoot = document.getElementById('app')
//
// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   );
//
// ReactDOM.render(templateTwo, appRoot)
// }
//
// renderCounterApp();
