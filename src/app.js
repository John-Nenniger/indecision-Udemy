
console.log("app.js is running")

const app = {
  title: 'Indecision App',
  subtitle: 'Let me, a robot decide for you.',
  options: [' One', ' Two', ' Three', ' fer']
}

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value

  if (option){
    app.options.push(` ${option}`);
    e.target.elements.option.value = '';
    renderIndecision()
  }
}

const removeAll = () => {
  app.options = [];
  renderIndecision()
}
// ternary operator condition ? "what happens if true" : "what happens if false"

const appRoot = document.getElementById('app')

const renderIndecision = () => {
  const template = (
  <div>
    <h1>{app.title}</h1>
    {true && <p>{app.subtitle}</p>}
    <p>{app.options.length>0 ? `Here are your options : ${app.options}` : "No options"}</p>
    <form onSubmit={onFormSubmit}>
      <input type="text" name="option" />
      <button>Add Option</button>
    </form>
    <button onClick={removeAll}>Remove All</button>
  </div>
  );

  ReactDOM.render(template, appRoot);
}
renderIndecision()
