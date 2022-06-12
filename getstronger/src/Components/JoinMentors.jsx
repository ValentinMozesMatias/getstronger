import React from 'react';
// import Header from './Header';

//Pages
// import Mentors from './Mentors';
import {BrowserRouter as Router} from 'react-router-dom';

function JoinMentors () {
    return (
        <Router>
        <div id='mentors'>
            <div className="pr-heading">
                <h1>Our<span>Mentors</span></h1>
                <p>Are you ready to explore?</p>
                <a href="/Mentors" className='pr-btn' exact>Find a Mentor</a>
                </div>
        </div>
        </Router>
    )
}

export default JoinMentors;