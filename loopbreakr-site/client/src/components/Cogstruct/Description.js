import React, {useState} from 'react'
import {cogstructImages} from './cogstructImages'
import { InfoRow, Column1, DescriptonContainer, Preview, PreviewContainer, Selected } from './CogstructElements'
import {Column2, Heading, InfoContainer, InfoWrapper, Subtitle, TextWrapper, TopLine } from '../Common/CommonElements';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Description = () => {
    const [selected, setSelected] = useState(cogstructImages[0]);
    AOS.init();
    return (
                <InfoContainer>
                    <InfoWrapper>
                        <InfoRow>
                            <div data-aos="fade-right">
                                <Column1>
                                    <DescriptonContainer>
                                        <TextWrapper>
                                            <Heading style={{color:'#f393aa', textAlign:'center'}}>Features</Heading>
                                        </TextWrapper>
                                        <Selected src={selected}/>
                                        <div data-aos="fade-in">
                                            <PreviewContainer>
                                                {cogstructImages.map((image, index) =>(
                                                    <Preview src={image} key={index} onClick={()=> setSelected(image)} style={{border: selected === image ? '3px solid green': '1px solid grey'}}/>  
                                                ))}
                                            </PreviewContainer>
                                        </div>   
                                        </DescriptonContainer>
                                </Column1>
                            </div>

                            <div data-aos="fade-left">
                                <Column2 >
                                    <TextWrapper>
                                        <TopLine style={{color:'#f393aa'}}>What does it do? </TopLine>
                                        <Subtitle style={{color:'#5FCC8A'}}>Cogstruct provides a paperless solution to CBT, by allowing you to do CBT based activities on your phone! Using Cogstruct, you can easily fill out worksheets that may help you understand the driving forces behind your unhelphul behaviors, thoughts, and emotions. In addition, Cogstruct allows you to gain valuable insights, by organizing all your worksheet input into helpful graphs and categories.</Subtitle>
                                    </TextWrapper>
                                </Column2>
                            </div>
                        </InfoRow>
                </InfoWrapper>
               </InfoContainer>
    )
}

export default Description
