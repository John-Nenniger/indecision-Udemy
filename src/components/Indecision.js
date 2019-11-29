import React from 'react';
import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

class Indecision extends React.Component{
  state = {
    options: [],
    selectedOption: undefined
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.options.length !== this.state.options.length){
      const jsonOptions = JSON.stringify(this.state.options)
      localStorage.setItem('options', jsonOptions);
    }
  }

  handleClearSelectedOption = () => {
    this.setState(() => ({selectedOption: undefined }))
  }

  handlePick = () => {
    const option = this.state.options[Math.floor(Math.random()*this.state.options.length)]
    this.setState(() => ({
      selectedOption: option
    }))
  }

  handleAddOption = (option) => {
    if(!option){
      return "Enter a valid value to add an item"
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists"
    }
    this.setState((prevState) => ({options: prevState.options.concat(option)}))
  }
  
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => (
      {options: prevState.options.filter((option) => option !== optionToRemove)}
    ))
  }

  handleDeleteOptions = () => {
    this.setState(() => ( {options:[]} ))
  }

  componentWillUnmount(){
    console.log("componentwillunmount")
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

  render(){
    const title = "Indecision";
    const subTitle = "Let a Robot make your Decisions";

    return <div>
      <Header title = {title} subTitle = {subTitle}/>
      <div className="container">
        <Action
          hasOptions = {this.state.options.length > 0}
          handlePick = {this.handlePick}
        />
        <div className="widget">
          <Options
            options = {this.state.options}
            handleDeleteOptions = {this.handleDeleteOptions}
            handleDeleteOption = {this.handleDeleteOption}
          />
          <AddOption
            handleAddOption = {this.handleAddOption}
          />
        </div>
      </div>
        <OptionModal
          selectedOption ={this.state.selectedOption}
          handleClearSelectedOption = {this.handleClearSelectedOption}
        />
    </div>
  }
}

export default Indecision
