import React, { Component } from 'react'
import { Route, NavLink, HashRouter } from "react-router-dom"


class Home extends Component {
    render() {
        return(
            <div className='home-section'>
                <h2 className='home-header'>Welcome to The Village</h2>
                <p className='company-name'>Mason Children and Teen Safeplace</p>
                <img className='img-cover' src='https://images.pexels.com/photos/923657/pexels-photo-923657.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
                <h3 className='offer'>What can we offer!</h3>
                <div className='image-container'>
                    <img className='img-1' src='https://images.pexels.com/photos/3351450/pexels-photo-3351450.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
                    <p className='programs'>PROGRAMS</p>
                </div>
                <div className='image-container'>
                    <img className='img-2' src='https://images.pexels.com/photos/3466163/pexels-photo-3466163.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260' />
                    <p className='education'>EDUCATION</p>
                </div>
                <div className='image-container'>
                    <img className='img-3' src='https://images.pexels.com/photos/1471843/pexels-photo-1471843.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
                    <p className='family'>FAMILY</p>
                </div>

            </div>
        )
    }
}


export default Home