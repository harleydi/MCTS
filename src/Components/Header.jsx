import React, { Component } from 'react'
import { NavLink, Route, Switch, Router } from 'react-router-dom'
import Home from './Home'



class Header extends Component {
    render() {
        return (
            <div className='header-page'>
                <NavLink to='/' className='link-style' >Home</NavLink>
                <NavLink to='/resources' className='link-style'>Resources</NavLink>
                <NavLink to='/about' className='link-style'>About</NavLink>
            </div>
        )
    }
}



export default Header