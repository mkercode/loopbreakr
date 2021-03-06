import styled from 'styled-components';

export const TopContainer = styled.div`
background: #88EAAF;
display: flex;
justify-content: center;
align-items: center;
position: relative;
`

export const InfoRow = styled.div`
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

export const DescriptonContainer = styled.div`
margin: auto;
margin-top: 30px;
width: 100%;
max-width: 540px;

`

export const Container = styled.div`
margin: auto;
margin-top: 80px;
width: 100%;
max-width: 540px;
`

export const Selected = styled.img`
display: block;
width: 270px;
height: 585px;
margin: 0 auto;
border: 4px solid green;
background-color:#fff;
margin-top: 30px;
`

export const PreviewContainer = styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-wrap: wrap;
padding: 40px 0 0 0;

`

export const Preview = styled.img`
display: block;
cursor: pointer;
width: 64px;
height: 140px;
margin: 5px 0 5px 5px;
background-color:#fff;
`

export const SpaceContainer = styled.div`

@media screen and (max-width:768px){
    margin-bottom:30px;
}
`



