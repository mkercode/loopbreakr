import React from 'react'
import { Column1, Column2, InfoRow, InfoContainer,InfoWrapper,TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img} from '../Common/CommonElements';
import hocusFocusLogo from '../../images/hocusFocusLogo.svg';
import {SpaceContainer } from './HocusFocusElements'

const Intro = () => {
    return (
        <SpaceContainer style={{backgroundColor: '#9D9FFF'}}>
            <InfoContainer>
                <InfoWrapper>
                    <InfoRow>
                        <Column2>
                        <ImgWrap>
                        <Img src ={hocusFocusLogo} style={{padding:'50px'}}/>
                        </ImgWrap>
                        </Column2>
                        <Column1>
                            <TextWrapper>
                                <TopLine style={{color:'#fff'}}>Focus on getting focused</TopLine>
                                <Heading style={{color:'#E64648'}}>Hocus Focus</Heading>
                                <Subtitle>An app based on ADHD research and the concept of focus techniques such as Pomodoro.</Subtitle>
                            </TextWrapper>
                        </Column1>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </SpaceContainer>
    )
}

export default Intro
