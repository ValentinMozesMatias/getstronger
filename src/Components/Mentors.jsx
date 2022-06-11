import React from 'react';
import Servicesbox2 from './Servicesbox2';
import MarianCurculescu from './images/MarianCurculescu.jpg';
import MozesValentin from './images/MozesValentin.jpg';
import DorinCristea from './images/DorinCristea.jpg';
import LazarBogdan from './images/BogdanLazar.jpg';
// import JoinMentors from './JoinMentors';
import { Link } from 'react-router-dom';
import Home from '../Home';



function Mentors () {
    return (
        <div id='mentors2'>
            <div className="pr-heading">
                <h1>Our<span>Mentors</span></h1>
                <div id='services2'>
                <div className='a-container2'>
                    <a href="https://www.facebook.com/marian.curculescu.5">
                <Servicesbox2 image={MarianCurculescu} title="Marian Curculescu - Mountaineer and Guide" />
                    </a>
                    <a href="https://www.facebook.com/valentinmatiasmozes">
                <Servicesbox2 image={MozesValentin} title="Valentin Mozes - Climber and Calisthenics practitioner" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=100011345157560">
                <Servicesbox2 image={DorinCristea} title="Dorin Cristea - Mountaineer, Climber and Guide" />
                    </a>
                    <a href="https://www.facebook.com/bogdan.lazar88">
                <Servicesbox2 image={LazarBogdan} title="Lazar Bogdan - Passionate Sport and Multipitch  Climber" />
                    </a>
                    <div className='pr-btns'>
                    <Link to='/Home' className='pr-btn' exact>Go Back<span/>{Home}</Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mentors;