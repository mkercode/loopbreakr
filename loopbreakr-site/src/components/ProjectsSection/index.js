import React from 'react'
import {padWrapper,AddPadding, WideTextWrapper, InfoContainer, TopLine, Heading, WideSubtitle} from '../Common/CommonElements.js'
import ImageSlider from '../Slider/ImageSlider.js'
import { SliderData } from '../Slider/SliderData.js'

const ProjectsSection = ({color, id, topLine, lightText, headLine, darkText, description, img, alt}) => {
    return (
        <InfoContainer style={{backgroundColor: color}} id={id}>
            


                        <padWrapper>
                            <WideTextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <WideSubtitle darkText={darkText}>{description}</WideSubtitle>
                            </WideTextWrapper>

                        
                            <AddPadding>
                            <ImageSlider slides={SliderData}/>
                            </AddPadding>
                            </padWrapper>
        </InfoContainer>
        )
    }

export default ProjectsSection
