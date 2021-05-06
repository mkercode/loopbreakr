import React, {useState} from 'react'
import {cogstructImages} from './cogstructImages'
import { Container, Preview, PreviewContainer, Selected } from './CogstructElements'
import { Column1, Column2, InfoContainer, InfoRow, InfoWrapper } from '../Common/CommonElements';


const Description = () => {
    const [selected, setSelected] = useState(cogstructImages[0]);
    return (
            <div>
                <InfoContainer>
                <InfoWrapper>
                <InfoRow>
                   <Column1>
                   <Container>
            <Selected src={selected}/>
            <PreviewContainer>
                {cogstructImages.map((image, index) =>(
                    <Preview src={image} key={index} onClick={()=> setSelected(image)} style={{border: selected === image ? '4px solid green': ''}}/>  
                ))}
            </PreviewContainer>   
            </Container>
                   </Column1>

                   <Column2>

                   </Column2>
               </InfoRow>
               </InfoWrapper>
               </InfoContainer>
            </div>
    )
}

export default Description
