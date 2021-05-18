import React, {useState} from 'react'
import {cogstructImages} from './cogstructImages'
import { Column1, DescriptonContainer, Preview, PreviewContainer, Selected } from './CogstructElements'
import {Column2, Heading, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from '../Common/CommonElements';


const Description = () => {
    const [selected, setSelected] = useState(cogstructImages[0]);
    return (
                <InfoContainer>
                    <InfoWrapper>
                        <InfoRow>
                            <Column1>
                                <DescriptonContainer>
                                    <TextWrapper>
                                        <Heading style={{color:'#f393aa', textAlign:'center'}}>Features</Heading>
                                    </TextWrapper>
                                    <Selected src={selected}/>
                                    <PreviewContainer>
                                        {cogstructImages.map((image, index) =>(
                                            <Preview src={image} key={index} onClick={()=> setSelected(image)} style={{border: selected === image ? '4px solid green': ''}}/>  
                                        ))}
                                    </PreviewContainer>   
                                    </DescriptonContainer>
                            </Column1>

                            <Column2>
                                <TextWrapper>
                                    <TopLine style={{color:'#f393aa'}}>What does it do? </TopLine>
                                    <Subtitle style={{color:'#5FCC8A'}}>Cogstruct provides a paperless solution to CBT, by allowing you to do CBT based activities on your phone! Using Cogstruct, you can easily fill out worksheets that may help you understand the driving forces behind your unhelphul behaviors, thoughts, and emotions. In addition, Cogstruct allows you to gain valuable insights, by organizing all your worksheet input into helpful graphs and categories.</Subtitle>
                                </TextWrapper>
                            </Column2>
                        </InfoRow>
                </InfoWrapper>
               </InfoContainer>
    )
}

export default Description
