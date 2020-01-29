import React, { Component } from 'react';
import './App.css';
import { getResources, getDataOnLoad } from './Services/api-helper'
import Header from './Components/Header';
import Resources from './Components/Resources';
import axios from 'axios'
import Home from './Components/Home';
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import Main from './Components/Main';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Resources: [],
      userInput: '',
      results: []
    }
  }

  handleChange = (e) => {
    let value = e.target.value;
    this.setState({
      userInput: value
    })
    console.log(value);

  }

  handleClick = async (e) => {
    e.preventDefault()
    let searchResults = await getResources(this.state.userInput)
    this.setState({
      results: searchResults
    })
    console.log('im rendering');
    // console.log(searchResults)

  }



  async componentDidMount() {

    let response = await getDataOnLoad();
    this.setState({
      Resources: response.data
    })
    console.log(this.state.Resources)
  }




  render() {
    console.log(this.state.Resources);

    return (
      <div>
        <Header />
        <Main handleChange={this.handleChange} userInput={this.userInput} handleClick={this.handleClick} results={this.state.results} resources={this.state.response} />

      </div>
    )
  }
}

export default App;
