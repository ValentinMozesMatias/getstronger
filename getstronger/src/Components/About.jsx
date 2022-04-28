import React from 'react'
import aboutimage from '../Components/images/about.jpg';

function About () {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={aboutimage} alt=''/>
            </div>
            <div className='about-text'>
           <h1>LEARN MORE ABOUT US</h1>
           <p>Our Mountaineering team is a non profit organization</p>
           <a href="https://www.patreon.com/user?u=33855256">
           <button>READ MORE</button>
           </a>
        </div>
        </div>
    )
}

export default About;

