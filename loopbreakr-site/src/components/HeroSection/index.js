import React from 'react'
import Image from '../../images/heroIcon.svg'
import {HeroContainer, GreetingIcon, HeroBg, HeroContent, HeroH1, HeroP} from './HeroElements.js'

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroContent>
                <HeroH1 >Breaking the Mental Loop</HeroH1>
                <HeroP>Coding the Tools That Help</HeroP>\
            </HeroContent>
            <HeroBg><GreetingIcon src={Image}  /></HeroBg>
        </HeroContainer>
    )
}

export default HeroSection
