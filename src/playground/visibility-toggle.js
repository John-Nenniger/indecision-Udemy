const me = {
  name: "John",
  details:"yeah yeah hey whaaat"
}

class VisibilityToggle extends React.Component {
  constructor(props){
    super(props)
    this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
    this.state = {
      visibility: true
    }
  }

  handleVisibilityToggle(){
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }

  render(){
      return(<div>
        <h1>{me.name}</h1>
        <button onClick={this.handleVisibilityToggle}>
          {this.state.visibility ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.visibility && (<div>
          <p>{me.details}</p>
        </div>)}
      </div>
    );
  }

}


ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
