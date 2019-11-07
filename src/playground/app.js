
class IndecisionApp extends React.Component{
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
  }
  componentDidMount(){
    try {
      const jsonOptions = localStorage.getItem("options")
      const options = JSON.parse(jsonOptions);

      if (options){
        this.setState(() => ({options}))
      }
    } catch(err) {
        console.log(err)
      }
  }
  componentDidUpdate(prevProps, prevState){
    if (prevState.options.length !== this.state.options.length){
      const jsonOptions = JSON.stringify(this.state.options)
      localStorage.setItem('options', jsonOptions);
    }
  }
  componentWillUnmount(){
    console.log("componentwillunmount")
  }

  handlePick(){
    alert(this.state.options[Math.floor(Math.random()*this.state.options.length)])
  }

  handleAddOption(option){
    if(!option){
      return "Enter a valid value to add an item"
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists"
    }
    this.setState((prevState) => ({options: prevState.options.concat(option)}))
  }
  handleDeleteOption(optionToRemove){
    this.setState((prevState) => (
      {options: prevState.options.filter((option) => option !== optionToRemove)}
    ))
  }

  handleDeleteOptions(){
    this.setState(() => ( {options:[]} ))
  }

  render(){
    const title = "Indecision";
    const subTitle = "Let a Robot make your Decisions";

    return <div>
      <Header title = {title} subTitle = {subTitle}/>
      <Action
        hasOptions = {this.state.options.length > 0}
        handlePick = {this.handlePick}
      />
      <Options
        options = {this.state.options}
        handleDeleteOptions = {this.handleDeleteOptions}
        handleDeleteOption = {this.handleDeleteOption}
      />
      <AddOption
        handleAddOption = {this.handleAddOption}
      />
    </div>
  }
}

const Header = (props) => {
  return <div>
    <h1>{props.title}</h1>
    {props.subTitle && <h2>{props.subTitle}</h2>}
  </div>
}

Header.defaultProps = {
  title: 'Indecision'
}

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick}
        disabled={!props.hasOptions}
        >
        What should I do?
      </button>
    </div>
  )
}

const Options = (props) => {
  return(
    <div>
      <button onClick={props.handleDeleteOptions}>Remove all options</button>
      {props.options.length === 0 && <p>Add an option to start!</p>}
      {
        props.options.map((option) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>)
}

const Option = (props) => {
  return(<div>
    <p>{props.optionText}</p>
    <button
      onClick = {(e) => {
        props.handleDeleteOption(props.optionText)
      }}>
      Remove
    </button>
  </div>)
}

class AddOption extends React.Component{
  constructor(props){
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }

  handleAddOption(e){
    e.preventDefault()

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({error}));

    if (!error){
      e.target.elements.option.value = "";
    }
  }

  render(){
    return (
    <div>
      {this.state.error && <p>{this.state.error}</p>}
      <form onSubmit={this.handleAddOption}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>)
  }
}

ReactDOM.render(<IndecisionApp options={[]} />, document.getElementById('app'))
