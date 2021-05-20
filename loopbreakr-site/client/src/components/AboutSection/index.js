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
            <div data-aos="slide-right">
                    <Column1>
                        <TextWrapper style={{marginTop:'15px'}}>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <Subtitle darkText={darkText} bottomText={bottomText}>{description}</Subtitle>
                        </TextWrapper>
                    </Column1>
                </div>

                <div data-aos="slide-left">
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt ={alt} />
                        </ImgWrap>
                    </Column2>
                </div>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
    )
}

export default InfoSection
