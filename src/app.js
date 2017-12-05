
class IndecisionApp extends React.Component{
  render(){
    const title = "Indecision";
    const subTitle = "Let a Robot make your Decisions";
    const options = ['thing one', 'thing two', "thing three"];

    return <div>
      <Header title={title} subTitle={subTitle}/>
      <Action />
      <Options options={options}/>
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
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    )
  }
}

class Options extends React.Component{
  removeAll(){
    // this.props.options = [];
    // IndecisionApp.render()
    alert('remove all triggered')
  }
  render(){
    return(
      <div>
        <button onClick={this.removeAll}>Remove all options</button>
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
