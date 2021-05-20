import React from 'react'
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, ImgWrap, TextWrapper, TopLine, Heading, Subtitle, Img, Button, ButtonRoute} from '../Common/CommonElements.js'

import AOS from 'aos';
import 'aos/dist/aos.css'; 

const DonateSection = ({color, id, topLine, lightText, headLine, darkText, description, img, alt}) => {
    AOS.init();
    return (

        <InfoContainer style={{backgroundColor: color}} id={id}>
        <InfoWrapper>
            <InfoRow>
                <div data-aos="slide-right">
                    <Column1>
                        <TextWrapper >
                            <TopLine style={{marginTop:'15px'}}>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <ButtonRoute to='/donationform'>
                                <Button>Donation Form {'>'}
                            </Button></ButtonRoute>
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

export default DonateSection
