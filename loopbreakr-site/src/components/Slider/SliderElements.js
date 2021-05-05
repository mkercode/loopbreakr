import styled from 'styled-components';


export const Slider = styled.div`
position:relative;
height:645px;
display: grid;
justify-content: center;
align-items: center;
padding:50px;

}
`

export const ImageSlide = styled.img`
    
    height: 250px;
    width: 80%;
    border-radius: 10px;
    padding: 10px;
    margin-left: 70px;
    margin-right: 70px;

    @media screen and (max-width: 480px){
        width: 300px;
        height: 200px;
        margin: 10px;
    }

    @media screen and (max-width: 760px){
        width: 400px;
        height: 200px;
    }
`

export const Title = styled.h1`
margin-top: 20px;
max-width: 440px;
color: #fff;
margin-left: 60px;
margin-right: 0px;
padding: 10px;

@media screen and (max-width: 480px){
    font-size: 20px;
    margin: 10px;
}

`

export const Description = styled.p`
    max-width: 440px;
    font-size: 13px;
    line-height: 20px;
    color: '#fff';
    margin-left: 60px;
    margin-right: 60px; 
    padding:10px;

    @media screen and (max-width: 480px){
        font-size: 10px;
        margin: 10px;
    }

`