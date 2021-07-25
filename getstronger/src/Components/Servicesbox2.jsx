import React from 'react'

function Servicesbox2(props) {
    return (
        <div className='a-box2'>
            <div className='a-b-img2'>
                    <img src={props.image} alt=''/>
                </div>
                <div className='a-b-text2'>
                    <h2>{props.title}</h2>
                    {/* <p>Get more endurance</p> */}
            </div>
        </div>
    )
}

export default Servicesbox2;