
console.log("app.js is running")

var template = (
<div>
  <h1>This is JSX rendered by app.js</h1>
  <p>sup</p>
</div>
);

let user = {
  name: "John Nenniger",
  age: 25,
  location: "Vancouver"
}

let userName = "John Nenniger";
let userAge = 25;
let userLocation = "Vancouver, Canada"
var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
)
var appRoot = document.getElementById('app')
ReactDOM.render(templateTwo, appRoot)
