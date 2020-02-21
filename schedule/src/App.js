import React, {Component} from 'react';
import {Form} from './Components/Form';
import {List} from './Components/List';
import './App.css'

const defaultValues = {
  name: "",
  carnet: "",
  late: ""
};

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      ...defaultValues,
      lines: []
    }
  }

  submitHandler = (event) => {
    event.preventDefault();
    const {name, carnet, late} = this.state;
    const lines = [...this.state.lines];
    lines.push({name, carnet, late});
    this.setState({...defaultValues, lines});
  }

  changeHandler = (event) => {
    const {target} = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.id]: value
    });
  }

  deleteHandler = (lineIndex) => {
    const lines = this.state.lines.filter((line) => {
      return lineIndex !== line.carnet;
    });
    this.setState({lines});
  }


  render() {
    const {name, carnet, late} = this.state;
    return (
      <div>
        <Form name={name} carnet={carnet} late={late} submitHandler={this.submitHandler} changeHandler={this.changeHandler} />
        <List list={[...this.state.lines]} deleteHandler={this.deleteHandler} /> 
      </div>
    );
  }


}



export default App;
