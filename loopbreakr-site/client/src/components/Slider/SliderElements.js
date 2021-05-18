import styled from 'styled-components';


export const Slider = styled.div`
display:flex;
height:600px;
justify-content: center;
align-items: center;
margin-top:-30px;


@media screen and (max-width: 760px){
    margin-top:-60px;
}
`

export const ImageSlide = styled.img`
    
    height: 250px;
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    margin-bottom:20px;

    @media screen and (max-width: 550px){
        height: 200px;

    }
`

export const Title = styled.h1`
font-family: 'Press Start 2P', cursive;
margin-top: 20px;
max-width: 440px;
color: #fff;
padding: 10px;

@media screen and (max-width: 760px){
    font-size: 20px;
    margin: 10px;
}

`

export const Description = styled.p`
    font-family: 'Source Code Pro', monospace;
    max-width: 440px;
    font-size: 16px;
    line-height: 20px;
    color: '#fff';
    padding:10px;

    @media screen and (max-width: 760px){
        font-size: 12px;
        margin: 10px;
    }

`