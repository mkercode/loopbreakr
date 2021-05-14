import React from 'react'
import {padWrapper,AddPadding, WideTextWrapper, InfoContainer, TopLine, Heading, WideSubtitle} from '../Common/CommonElements.js'
import ImageSlider from '../Slider/ImageSlider.js'
import { SliderData } from '../Slider/SliderData.js'

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const ProjectsSection = ({color, id, topLine, lightText, headLine, darkText, description, img, alt}) => {
    AOS.init();
    return (
        <div data-aos="zoom-in">
        <InfoContainer style={{backgroundColor: color}} id={id}>
                        <padWrapper>
                            <WideTextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <WideSubtitle darkText={darkText}>{description}</WideSubtitle>
                            </WideTextWrapper>

                        
                            <AddPadding>
                            <div data-aos="fade-in">
                            <ImageSlider slides={SliderData}/>
                            </div>
                            </AddPadding>
                            </padWrapper>
        </InfoContainer>
        </div>
        )
    }

export default ProjectsSection
