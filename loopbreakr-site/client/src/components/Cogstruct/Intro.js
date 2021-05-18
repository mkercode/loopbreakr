import React from 'react'
import {Column2, InfoRow, InfoContainer,InfoWrapper,TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img} from '../Common/CommonElements';
import cogstructLogo from '../../images/cogstructLogo.svg';
import { Column1, SpaceContainer } from './CogstructElements'



const Intro = () => {
    return (
        <SpaceContainer style={{backgroundColor: '#88EAAF'}}>
            <InfoContainer>
                <InfoWrapper>
                    <InfoRow style={{minHeight:'700px'}}>
                        <Column2>
                        <ImgWrap>
                        <Img src ={cogstructLogo} style={{padding:'50px'}}/>
                        </ImgWrap>
                        </Column2>
                        <Column1>
                            <TextWrapper>
                                <TopLine style={{color:'#fff'}}>Mental health resources for everyone</TopLine>
                                <Heading style={{color:'#f393aa'}}>Cogstruct</Heading>
                                <Subtitle>An app based on clinical Cognitive Behavioral Therapy (CBT). Created to help anyone target unhelpful behaviors, thoughts, and emotions</Subtitle>
                            </TextWrapper>
                        </Column1>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </SpaceContainer>
    )
}

export default Intro
