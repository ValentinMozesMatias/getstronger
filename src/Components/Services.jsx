import React from 'react'
import Servicesbox from './Servicesbox';
import Mountaineering from './images/Mountaineering.jpg'
import Calisthenics2 from './images/Calisthenics2.PNG'
import SportClimbing from './images/SportClimbing.PNG'
import DietPlans from './images/DietPlans.jpg'

function Services () {
    return (
        <div id='services'>
            <h1>Services</h1>
            <div className='a-container'>
                <Servicesbox image={Mountaineering} title="Mountaineering" />
                <Servicesbox image={Calisthenics2} title="Calisthenics and General fitness" />
                <Servicesbox image={SportClimbing} title="Sport Climbing" />
                <Servicesbox image={DietPlans} title="Diet Plans" />
            </div>
        </div>
    )
}

export default Services;