import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'



class Resources extends Component {
    
    
    render() {
        return (
            <div>
                <form>
                    <h1 className='main-text-color'><span className='instruction-span'>ACS</span> Partners</h1>
                    <input className='search-bar' placeholder='Borough' type='text' onChange={this.props.handleChange} value={this.props.userInput} />
                    <button className='search-button' onClick={this.props.handleClick}><i className="fas fa-search"></i></button>
                </form>
                <p>Click to get information on a program !</p>
                <div className='resourceContainer'>
                {this.props.results.map(result => (
                    <div className='resource-link' key={result.program_lst_id}>
                        <NavLink className="resource-link2" to={`/resourceDescription/${result.program_lst_id}`}>{result.agency_name}</NavLink>
                    </div> 
                ))}
                </div>
            </div>
        )
    }
}



export default Resources