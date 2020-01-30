import React, { Component } from 'react'
import { render } from '@testing-library/react'



const About = (props) => {

        return(
            <div>
                <h1 className='about-header'>About Us</h1>
                <p className='about-para'>Our missions is to protect our NYC youth/children and teens from the harms of homelessness or unsafe and unloving enviornments. We take in kids and teens so that they dont have to go to ACS or be sepereated from their siblings and possibly friends. We aspire to save as many children as possible and be able to provide then the childhood that everyone deserves to have. We plan to give the underprivalaged children in NYC to have a choice as to whether they would like to go into 'the system' or come to our program and get the love support and that every child needs in order to be able to live a the best possible life.</p>
                <img className='about-img' src='https://images.pexels.com/photos/935951/pexels-photo-935951.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
                <cite className='cite-village'>`"It takes a village to raise a child! So why not be raised by the village !"`</cite>
            </div>
        )
    
}




export default About