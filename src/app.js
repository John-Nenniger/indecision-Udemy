const app = {
  title: "Indecision",
  options: [0,1,2,3,4]

}

class Header extends React.Component{
  render(){
    return <div>
      <h1>Indecision</h1>
      <h2>Ask a computer what to do</h2>
    </div>
  }
}

class Action extends React.Component {
  render(){
    return (
      <div>
        <button>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component{
  render(){
    return(
      <div>
        <p>{app.options[0]}</p>
        <p>{app.options[1]}</p>
        <p>{app.options[2]}</p>
      </div>)
  }
}

class AddOption extends React.Component{
  render(){
    return (<form>
      <input type="text" name="option" />
      <button>Add Option</button>
    </form>)
  }
}


const jsx = (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOption />
  </div>
)

ReactDOM.render(jsx, document.getElementById('app'))
