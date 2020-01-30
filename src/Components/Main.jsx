import React, { Component } from 'react'
import { Route, NavLink, HashRouter } from "react-router-dom"
import Home from './Home'
import Header from './Header'
import Resources from './Resources'
import About from './About'
import ResourceDescription from './ResourceDescription'



class Main extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        return (
            <div className='main-page'>
                <Route exact path='/' component={Home} />
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
                <Route exact path='/resourceDescription/:program_id'><ResourceDescription {...this.props} onResourceLoad={this.props.onResourceLoad} descResults={this.props.descResults} /></Route>
            </div>
        )
    }
}



export default Main

//difference between render={what you pass in here} and component={what you pass in here}