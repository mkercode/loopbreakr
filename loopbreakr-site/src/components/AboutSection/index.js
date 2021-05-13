import React from 'react'
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, ImgWrap, Img, TextWrapper, TopLine, Heading, Subtitle} from '../Common/CommonElements.js'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const InfoSection = ({id, topLine, lightText, headLine, darkText, description, img, alt, bottomText}) => {
    AOS.init();
    return (
    <InfoContainer id={id}>
        <InfoWrapper>
            <InfoRow>
                <Column1>
                <div data-aos="fade-right">
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headLine}</Heading>
                        <Subtitle darkText={darkText} bottomText={bottomText}>{description}</Subtitle>
                    </TextWrapper>
                    </div>
                </Column1>
                <Column2>
                <div data-aos="fade-left">
                    <ImgWrap>
                        <Img src={img} alt ={alt} />
                    </ImgWrap>
                    </div>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
    )
}

export default InfoSection
