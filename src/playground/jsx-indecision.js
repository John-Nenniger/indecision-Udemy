
console.log("app.js is running")
const appRoot = document.getElementById('app')

const app = {
  title: 'Indecision App',
  subtitle: 'Let me, a robot decide for you.',
  options: []
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

const makeDecision = () => {
  const random = Math.floor(Math.random() * app.options.length);
  const option = app.options[random];
  alert(option);
  console.log(random);

}
// ternary operator condition ? "what happens if true" : "what happens if false"

const numbers = [99,98,97,95]


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
    <button onClick={makeDecision}>What should I do?</button>
    <button onClick={removeAll}>Remove All</button>
    {/* {numbers.map((number) => {
      return <p key={number}>Number: {number}</p>
    })} */}
    <ol>
      {app.options.map((option) => {
        return <li key={option}> Option: {option}</li>
      })}
    </ol>
  </div>
  );

  ReactDOM.render(template, appRoot);
}
renderIndecision()
