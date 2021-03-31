import React from 'react'
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, ImgWrap, TextWrapper, TopLine, Heading, Subtitle, ImgBelow} from '../Common/CommonElements.js'
import ImageSlider from '../Slider/ImageSlider.js'
import { SliderData } from '../Slider/SliderData.js'

const ProjectsSection = ({color, id, topLine, lightText, headLine, darkText, description, img, alt}) => {
    return (
        <InfoContainer style={{backgroundColor: color}} id={id}>
            <InfoWrapper>
                <InfoRow>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                        </TextWrapper>
                        
                    </Column1>
                    <Column2>
                        <ImageSlider slides={SliderData}/>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
        )
    }

export default ProjectsSection
