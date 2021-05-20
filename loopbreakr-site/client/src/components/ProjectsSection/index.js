import React from 'react'
import {padWrapper,AddPadding, WideTextWrapper, InfoContainer, TopLine, Heading, WideSubtitle, Column2, Column1, InfoRow, InfoWrapper, TextWrapper} from '../Common/CommonElements.js'
import ImageSlider from '../Slider/ImageSlider.js'
import { SliderData } from '../Slider/SliderData.js'

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const ProjectsSection = ({color, id, topLine, lightText, headLine, darkText, description, img, alt}) => {
    AOS.init();
    return (
        <InfoContainer style={{backgroundColor: color}} id={id} >
            <InfoWrapper>
                <WideTextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headLine}</Heading>
                    <WideSubtitle darkText={darkText}>{description}</WideSubtitle>
                </WideTextWrapper>
                
                <div data-aos="fade-in"><ImageSlider slides={SliderData}/></div>
            </InfoWrapper>
        </InfoContainer>
        )
    }

export default ProjectsSection
