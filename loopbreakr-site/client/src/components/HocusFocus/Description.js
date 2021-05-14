import React from 'react'
import hocusFocusGraph from '../../images/hocusFocusGraph.svg';
import { DescriptonContainer} from './HocusFocusElements'
import { Column1, Column2, Heading, Img, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from '../Common/CommonElements';

const Description = () => {
    return (
        <div style={{backgroundColor:'#fff'}}>
                <InfoContainer>
                    <InfoWrapper>
                        <InfoRow>
                            <Column1>
                                <DescriptonContainer>
                                <TextWrapper>
                                        <Heading style={{color:'#E64648', textAlign:'center'}}>Features</Heading>
                                    </TextWrapper>
                                    <ImgWrap>
                                    <Img src={hocusFocusGraph} alt ={"Graph icon"}/>
                                    </ImgWrap> 
                                    </DescriptonContainer>
                            </Column1>

                            <Column2>
                                <TextWrapper>
                                    <TopLine style={{color:'#E64648'}}>What does it do? </TopLine>
                                    <Subtitle style={{color:'#7E73DE'}}>More than just a study timer app (not that there's anything wrong with those either). Pre-built focus systems are great, but what if there was a system specifically for you? Everyone is different, which is why this app will go off of your very own data to create your custom focus technique!</Subtitle>
                                </TextWrapper>
                            </Column2>
                        </InfoRow>
                </InfoWrapper>
               </InfoContainer>
            </div>
    )
}

export default Description
