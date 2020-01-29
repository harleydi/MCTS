import React, { Component } from 'react'
import { Link } from 'react-router-dom'



class Resources extends Component {
    render() {
        return (
            <div>
                <form>
                    <h1>Resoures Works</h1>
                    <input type='text' onChange={this.props.handleChange} value={this.props.userInput} />
                    <button onClick={this.props.handleClick}>Search</button>
                </form>
                <p>Works</p>
                {this.props.results.map(result => (
                    <div key={result.program_lst_id}>
                        {result.agency_name}
                    </div> 
                ))}
                
            </div>
        )
    }
}



export default Resources