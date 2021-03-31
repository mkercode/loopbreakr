import styled from 'styled-components';


export const Slider = styled.div`
position:relative;
height:100vh;
display: flex;
justify-content: center;
align-items: center;
padding:100px;
`

export const ImageSlide = styled.img`
    width: 450px;
    height: 300px;
    border-radius: 10px;
    margin:10px;
`

export const Title = styled.h1`
padding-top: 20px;
max-width: 440px;
color: #fff;
margin: 30px;

@media screen and (max-width: 480px){
    font-size: 20px;
    margin: 50px;
}
`

export const Description = styled.p`
    max-width: 440px;
    margin: 30px;
    font-size: 15px;
    line-height: 24px;
    color: '#fff';

    @media screen and (max-width: 480px){
        font-size: 12px;
        margin: 50px;
    }

`