import React from 'react'
import { Column1, Column2, InfoRow, InfoContainer,InfoWrapper,TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img} from '../Common/CommonElements';
import cogstructLogo from '../../images/cogstructLogo.svg';
import { SpaceContainer } from './CogstructElements'

const Timeline = () => {
    return (
        <div style={{backgroundColor: '#88EAAF'}}>
            <InfoContainer>
                <InfoWrapper>
                    <InfoRow>
                        <Column1>
                        <TextWrapper>
                                <TopLine style={{color:'#fff'}}>Mental health resources for everyone</TopLine>
                                <Heading style={{color:'#f393aa'}}>Cogstruct</Heading>
                                <Subtitle>An app based on clinical cognitive brhavioral therapy. Created to help anyone target unhelpful behaviors, thoughts, and emotions</Subtitle>
                            </TextWrapper>
                        
                        </Column1>
                        
                        <Column2>
                        <ImgWrap>
                        <Img src ={cogstructLogo} style={{padding:'50px'}}/>
                        </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </div>
    )
}

export default Timeline
