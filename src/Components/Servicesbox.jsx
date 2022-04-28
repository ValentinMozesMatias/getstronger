import React from 'react'

function Servicesbox(props) {
    return (
        <div className='a-box'>
            <div className='a-b-img'>
                    <img src={props.image} alt=''/>
                </div>
                <div className='a-b-text'>
                    <h2>{props.title}</h2>
                    {/* <p>Get more endurance</p> */}
            </div>
        </div>
    )
}

export default Servicesbox;