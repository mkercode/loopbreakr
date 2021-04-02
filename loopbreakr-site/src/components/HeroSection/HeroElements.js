import styled from 'styled-components';


export const HeroContainer = styled.div`
background: #e9c46a;
display: flex;
justify-content: center;
align-items: center;
height: 800px;
position: relative;
z-index: 1;

:before{
    content: '';
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
}
`

export const HeroBg = styled.div`
position: absolute;
right: 0;
bottom: 0;
alignSelf: baseline;
overflow: hidden;
`

export const GreetingIcon = styled.img`
    width: 300px;
    height: 500px;
    position: "absolute", 
    bottom: 0, 
    right: 0;
    margin-right: 54px;

    @media screen and (max-width: 1220px){
        width: 300px;
        height: 450px;
        margin-right: 24px;
    }
    
    @media screen and (max-width: 760px){
        width: 250px;
        height: 400px;
        margin-right:8px
    }
`

export const HeroContent = styled.div`
z-index: 3;
wax-width: 1200 px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
margin-top: -80px;
`

export const HeroH1 = styled.h1`
color: #fff;
align: center;
font-size: 40px;
text-align: center;
@media screen and (max-width: 1220px){
    font-size: 30px;
}

@media screen and (max-width: 480px){
    font-size: 25px;
}
`

export const HeroP = styled.p`
color: #fff;
align: center;
margin-top: 24px;
font-size: 20px;
text-align: center;
max-width: 600px
font-family: 'Share Tech', sans-serif;


@media screen and (max-width: 1220){
    font-size: 10px;
}

@media screen and (max-width: 480px){
    font-size: 10px;
}
`