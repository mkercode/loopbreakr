import React from 'react'
import {padWrapper,AddPadding, WideTextWrapper, InfoContainer, TopLine, Heading, WideSubtitle, Column2, Column1, InfoRow, InfoWrapper, TextWrapper} from '../Common/CommonElements.js'
import ImageSlider from '../Slider/ImageSlider.js'
import { SliderData } from '../Slider/SliderData.js'



const ProjectsSection = ({color, id, topLine, lightText, headLine, darkText, description, img, alt}) => {
    return (

        <InfoContainer style={{backgroundColor: color}} id={id} >
            <InfoWrapper>
                
                
                <WideTextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headLine}</Heading>
                    <WideSubtitle darkText={darkText}>{description}</WideSubtitle>
               
                    </WideTextWrapper>
                        
                
                    
                
                <ImageSlider slides={SliderData}/>
                
                </InfoWrapper>
        </InfoContainer>
        )
    }

export default ProjectsSection
