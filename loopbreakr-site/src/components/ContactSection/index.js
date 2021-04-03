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
                    <Column2 style={{paddingTop:"20px"} }>
                    <TextWrapper >
                        <Subtitle darkText={darkText} style={{marginBottom:"5px"} }>You can reach us at contact@loopbreakr.com</Subtitle>
                        <Subtitle darkText={darkText} style={{marginBottom:"5px"}}>Or give us a call at (647)-923-8612</Subtitle>
                        <Subtitle darkText={darkText} style={{marginBottom:"5px"}}>OR send us an email directly using the form below</Subtitle>
                        <Subtitle darkText={darkText} style={{marginBottom:"0px"}}>Because having options is pretty cool</Subtitle>
                    </TextWrapper>
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
