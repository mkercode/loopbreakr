import React from 'react'
import {InfoContainer, InfoWrapper, InfoRow, ImgWrap, TextWrapper, TopLine, Heading, Subtitle, ImgBelow} from '../Common/CommonElements.js'
import{Column1, Column2} from './ContactElements.js'
import ContactForm from './ContactForm.js'
import Image from '../../images/contactIcon.svg'


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
                            <ImgBelow src={Image}/>
                        </TextWrapper>
                        
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <ContactForm/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
        )
    }

export default ContactSection
