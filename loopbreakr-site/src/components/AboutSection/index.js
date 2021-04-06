import React from 'react'
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, ImgWrap, Img, TextWrapper, TopLine, Heading, Subtitle} from '../Common/CommonElements.js'


const InfoSection = ({id, topLine, lightText, headLine, darkText, description, img, alt, bottomText}) => {
    return (
    <InfoContainer id={id}>
        <InfoWrapper>
            <InfoRow>
                <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headLine}</Heading>
                        <Subtitle darkText={darkText} bottomText={bottomText}>{description}</Subtitle>
                    </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                        <Img src={img} alt ={alt} />
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
    )
}

export default InfoSection
