
console.log("app.js is running")

var template = (
<div>
  <h1>This is JSX rendered by app.js</h1>
  <p>sup</p>
</div>
);
var appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)
