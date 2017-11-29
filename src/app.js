
console.log("app.js is running")

function getLocation(location){
  if(location){
    return <p> Location: {location} </p>
  } else {
    return undefined
  }
}

function createOptions(options){
  if (options.length>0){
    return `Here are your options: ${options}`
  } else {
    return "No options"
  }
}

let app = {
  title: "Spork",
  subtitle: "cutlery?",
  options: ['One', 'Two']
}

console.log(app.subtitle)
var template = (
<div>
  <h1>{app.title}</h1>
  {true && <p>{app.subtitle}</p>}
  <p>{createOptions(app.options)}</p>
</div>
);

let user = {
  name: "John",
  age: 25,
  location: "Vancouver"
}

var templateTwo = (
  <div>
    <h1>{user.name ?  user.name : "Anonymous"}</h1>
    {/* booleans, Null, and undefined are all ignored by JSX */}
    {false}
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
)

// ternary operator condition ? "what happens if true" : "what happens if false"


var appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)
