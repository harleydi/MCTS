import React, { Component } from 'react'
import { Route, NavLink, HashRouter } from "react-router-dom"
import Home from './Home'
import Header from './Header'
import Resources from './Resources'
import About from './About'



class Main extends Component {
    render() {
        return (
            <div>
                <p>hello</p>

                <Route exact path='/Home' render={Home} />
                <Route exact path='/resources' render={() =>
                    <Resources
                        handleChange={this.props.handleChange}
                        userInput={this.props.userInput}
                        handleClick={this.props.handleClick}
                        results={this.props.results}
                        resources={this.props.response}
                    />}
                />
                <Route exact path='/about' render={About} />

            </div>
        )
    }
}



export default Main