
class IndecisionApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      options:['thing one', 'thing two', "thing five"]
    }

  }
  render(){
    const title = "Indecision";
    const subTitle = "Let a Robot make your Decisions";

    return <div>
      <Header title={title} subTitle={subTitle}/>
      <Action hasOptions={this.state.options.length > 0}/>
      <Options options={this.state.options}/>
      <AddOption />
    </div>
  }
}

class Header extends React.Component{
  render(){
    return <div>
      <h1>{this.props.title}</h1>
      <h2>{this.props.subTitle}</h2>
    </div>
  }
}

class Action extends React.Component {
  handlePick(){
    alert('handlePick')
  }
  render(){
    return (
      <div>
        <button onClick={this.handlePick}
          disabled={!this.props.hasOptions}
          >
          What should I do?
        </button>
      </div>
    )
  }
}

class Options extends React.Component{
  constructor(props){
    super(props);
    this.removeAll = this.removeAll.bind(this)
  }
  removeAll(){
    // this.props.options = [];
    // IndecisionApp.render()
    console.log(this.props.options)
  }
  render(){
    return(
      <div>
        <button onClick={this.removeAll.bind(this)}>Remove all options</button>
        {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
      </div>)
  }
}

class Option extends React.Component{
  render() {
    return(
      <p>{this.props.optionText}</p>
    )

  }
}

class AddOption extends React.Component{
  onFormSubmit(data){
    data.preventDefault()
    const option = data.target.elements.option.value.trim()
    if (option){
      alert(data.target.elements.option.value);
    }
  }
  render(){
    return (
    <form onSubmit={this.onFormSubmit}>
      <input type="text" name="option" />
      <button>Add Option</button>
    </form>)
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
