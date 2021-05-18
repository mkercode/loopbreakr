import React from 'react'
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, ImgWrap, TextWrapper, TopLine, Heading, Subtitle, Img, Button, ButtonRoute} from '../Common/CommonElements.js'


const DonateSection = ({color, id, topLine, lightText, headLine, darkText, description, img, alt}) => {

    return (

        <InfoContainer style={{backgroundColor: color}} id={id}>
        <InfoWrapper>
            <InfoRow>
                <Column1 style={{height:'450px'}}>
                    <TextWrapper >
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headLine}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        <ButtonRoute to='/donationform'>
                            <Button>Donation Form {'>'}
                        </Button></ButtonRoute>
                    </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap style={{marginBottom:'-40px'}}>
                        <Img src={img} alt ={alt} />
                    </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>

        )
    }

export default DonateSection
