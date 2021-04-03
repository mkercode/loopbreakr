import styled from 'styled-components';


export const Slider = styled.div`
position:relative;
height:645px;
display: flex;
justify-content: center;
align-items: center;
padding:100px;

}
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
margin: 20px;

@media screen and (max-width: 480px){
    font-size: 20px;
    margin: 50px;
}
`

export const Description = styled.p`
    max-width: 440px;
    margin: 20px;
    font-size: 13px;
    line-height: 20px;
    color: '#fff';

    @media screen and (max-width: 480px){
        font-size: 10px;
        margin: 50px;
    }

`