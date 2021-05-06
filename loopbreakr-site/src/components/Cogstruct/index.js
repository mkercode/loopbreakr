import React, {useState} from 'react'
import {cogstructImages} from './cogstructImages'
import { Container, Preview, PreviewContainer, Selected } from './CogstructElements'
import { Column1, Column2, InfoContainer, InfoRow, InfoWrapper } from '../Common/CommonElements';
import Description from './Description';

function Cogstruct() {
const [selected, setSelected] = useState(cogstructImages[0]);
    return (
        <div style={{backgroundColor: '#9b88f6'}}>
               <Description/>
        </div>
    )
}

export default Cogstruct
