import styled from 'styled-components';

export const TopContainer = styled.div`
background: #88EAAF;
display: flex;
justify-content: center;
align-items: center;
position: relative;
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
width: 300px;
height: 300px;
margin: 0 auto;
border: 4px solid green;
padding:10px;
background-color:#fff;
margin-top: 30px;
`

export const PreviewContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
padding: 40px 0 0 0;

`

export const Preview = styled.img`
display: block;
cursor: pointer;
width: 100px;
height: 100px;
margin: 5px 0 5px 5px;
background-color:#fff;
`

export const SpaceContainer = styled.div`

@media screen and (max-width:768px){
    margin-bottom:30px;
}
`



