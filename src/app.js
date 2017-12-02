const app = {
  title: "Indecision",
  options: [0,1,2,3,4]

}

class IndecisionApp extends React.Component{
  render(){
    return <div>
      <Header />
      <Action />
      <Options />
      <AddOption />
    </div>
  }
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
        <Option />
        <Option />
        <Option />
      </div>)
  }
}

class Option extends React.Component{
  render() {
    return(
      <p>This is an Option</p>
    )

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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
