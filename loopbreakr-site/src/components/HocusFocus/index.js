import React from 'react'
import Description from './Description'
import Intro from './Intro'
import Timeline from './Timeline'



const HocusFocus = () => {
    return (
        <div style={{marginTop:'80px'}}>
            <Intro/>
            <Description/>
            <Timeline/>
        </div>
    )
}

export default HocusFocus
