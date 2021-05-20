import React from 'react'
import {InfoContainer, InfoWrapper, InfoRow, ImgWrap, TextWrapper, TopLine, Heading, Subtitle, Img} from '../Common/CommonElements.js'
import{Column1, Column2} from './ContactElements.js'
import ContactForm from './ContactForm.js'
import Image from '../../images/contactIcon.svg'

import AOS from 'aos';
import 'aos/dist/aos.css'; 


const ContactSection = ({color, id, topLine, lightText, headLine, darkText, description}) => {
    AOS.init();
    return (
        <InfoContainer style={{backgroundColor: color}} id={id}>
            <InfoWrapper>
                <InfoRow>
                    <div data-aos="slide-right">
                        <Column1>
                                <TextWrapper>
                                    <TopLine >{topLine}</TopLine>
                                    <Heading lightText={lightText}>{headLine}</Heading>
                                    <Subtitle darkText={darkText}>{description}</Subtitle>
                                    <ImgWrap>
                                        <Img src={Image}/>
                                    </ImgWrap>
                                </TextWrapper>
                        </Column1>
                    </div>

                    <div data-aos="slide-left">
                        <Column2 >
                                <TextWrapper >
                                    <Subtitle darkText={darkText} style={{marginBottom:"5px"} }>You can reach us at contact@loopbreakr.com</Subtitle>
                                    <Subtitle darkText={darkText} style={{marginBottom:"5px"}}>Or give us a call at (647)-923-8612</Subtitle>
                                    <Subtitle darkText={darkText} style={{marginBottom:"5px"}}>OR send us an email directly using the form below</Subtitle>
                                    <Subtitle darkText={darkText} style={{marginBottom:"0px"}}>Because having options is pretty cool</Subtitle>
                                    
                                    <ImgWrap>
                                        <ContactForm/>
                                    </ImgWrap>
                                </TextWrapper>
                        </Column2>
                    </div>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
        )
    }

export default ContactSection
