console.log("app.js is running")

var template = <p>This is JSX rendered by app.js</p>
var appRoot = document.getElementById('app')
REACTDOM.render(template, appRoot)
