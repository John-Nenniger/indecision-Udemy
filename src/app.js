
console.log("app.js is running")

var template = (
<div>
  <h1>This is JSX rendered by app.js</h1>
  <p>sup</p>
</div>
);

let userName = "John Nenniger";
let userAge = 25;
let userLocation = "Vancouver, Canada"
var templateTwo = (
  <div>
    <h1>{userName}</h1>
    <p>Age: {userAge}</p>
    <p>Location: {userLocation}</p>
  </div>
)
var appRoot = document.getElementById('app')
ReactDOM.render(templateTwo, appRoot)
