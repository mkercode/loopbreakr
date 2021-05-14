import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';


export const InfoContainer = styled.div`
color: #fff


@media screen and (max-width:768px){
    padding: 100px 0;
}
`

export const InfoWrapper = styled.div`
    display: grid;
    margin-right: auto;
    margin-left: auto;
    
    
    justify-content: center;

`

export const InfoRow = styled.div`
    display: grid;

    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: 
    ${({imgStart}) => 
    imgStart ? `'col2 col1'` : `'col1 col2'`};

    @media screen and (max-width: 768px){
        grid-template-areas: 
        ${({imgStart}) => 
        imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    }
`

export const TopInfoRow = styled.div`
    display: grid;

    grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: 
    ${({imgStart}) => 
    imgStart ? `'col2 col1'` : `'col1 col2'`};

    @media screen and (max-width: 768px){
        grid-template-areas: 
        ${({imgStart}) => 
        imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    }
`

export const Column1 = styled.div`
margin-bottom: 30px;
padding: 0 15px;
grid-area: col1;

`

export const Column2 = styled.div`
margin-bottom: 30px;
padding: 0 15px;
grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    `

export const TopLine = styled.p`
    font-family: 'Press Start 2P', cursive;
    font-size: 12px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    padding: 30px 0 20px 0;
    

`

export const Heading = styled.h1`
    font-family: 'Press Start 2P', cursive;
    margin-bottom: 24px;
    font-size: 25px:
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#fff': '#e9c46a')};

    @media screen and (max-width: 480px){
        font-size: 20px;
    }
`

export const Subtitle = styled.p`
    font-family: 'Source Code Pro', monospace;
    max-width: 440px;
    margin-bottom: 20px;
    font-size: 20px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? '#f4a261': '#fff')};

    @media screen and (max-width: 480px){
        font-size: 12px;
    }

    ${({bottomText}) => 
    bottomText ? `margin-bottom: 0px` : `margin-bottom: 20px`};

`

export const ImgWrap = styled.div`
    max-width: 555px;
    height:100%;
    padding: 10px;

`

export const Img = styled.img`
    width: 100%;
    
`

export const ImgBelow = styled.img`
    width: 100%;
    
    justify-content: center;

`

export const padWrapper = styled.div`
    align-items: center;
    padding: 50px;
    justify-content: center;

`

export const AddPadding = styled.div`
    padding-left: 100px;
    padding-right: 100px;

    @media screen and (max-width: 960px){
        padding-left: 50px;
        padding-right: 50px;
    }

    @media screen and (max-width: 768px){
        padding-left: 20px;
        padding-right: 20px;
    }
`

export const WideTextWrapper = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    padding-top: 0;
    padding-right:50px;
    padding-left:50px;
`

export const WideSubtitle = styled.p`
    font-family: 'Source Code Pro', monospace;
    margin-bottom: 35px;
    font-size: 20px;
    line-height: 24px;
    color: ${({ darkText }) => (darkText ? '#f4a261': '#fff')};

    @media screen and (max-width: 480px){
        font-size: 12px;
    }

`

export const TextPadWrapper = styled.div`
max-width: 440px;
    display: grid;
    align-items: center;
    justify-content: center;
    padding-top: 0;
    padding-right:50px;
    padding-left:50px;
`

export const Button = styled.button`
    font-family: 'Press Start 2P', cursive;
    margin-top: 3px;
    margin-bottom: 3px;
    padding:6px;
    background-color:#e9c46a;
    cursor: pointer;


    &:hover{
        background-color: #b2e8ff;
        color:#e9c46a;
    }
`
export const ButtonRoute = styled(LinkR)`
display: inline-block
`

export const TimelineDescription = styled.p`
    font-family: 'Source Code Pro', monospace;
    margin-bottom: 20px;
    font-size: 12px;
`

export const TimelineTitle = styled.h3`
font-family: 'Press Start 2P', cursive;;
    margin-bottom: 20px;
    font-size: 14px;
`