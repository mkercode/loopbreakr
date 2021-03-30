import React from 'react'
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, ImgWrap, TextWrapper, TopLine, Heading, Subtitle} from '../Common/CommonElements.js'

const ContactSection = ({color, id, topLine, lightText, headLine, darkText, description}) => {
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
                        <ImgWrap>

                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
        )
    }

export default ContactSection
