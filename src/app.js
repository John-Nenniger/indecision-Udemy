
console.log("app.js is running")

function getLocation(location){
  if(location){
    return <p> Location: {location} </p>
  } else {
    return undefined
  }
}

const user = {
  name: "John",
  age: 25,
  location: "Vancouver"
}
// let and const are block scoped, var is functionally scoped
// (it gets hoisted into the surrounding function)
const templateTwo = (
  <div>
    <h1>{user.name ?  user.name : "Anonymous"}</h1>
    {/* booleans, Null, and undefined are all ignored by JSX */}
    {false}
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
)

// ternary operator condition ? "what happens if true" : "what happens if false"


const appRoot = document.getElementById('app')
ReactDOM.render(templateTwo, appRoot)
