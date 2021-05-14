import React from 'react'

import Description from './Description';
import Intro from './Intro';
import Timeline from './Timeline';

import AOS from 'aos';
import 'aos/dist/aos.css'; 

function Cogstruct() {
    AOS.init();
    return (
        <div style={{marginTop:'80px'}}>
            <Intro />
            <div data-aos="fade-left"><Description/></div>
            <div data-aos="fade-right"><Timeline/></div>
        </div>
    )
}

export default Cogstruct
