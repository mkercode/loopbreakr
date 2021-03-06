import styled from 'styled-components';



export const Column1 = styled.div`
margin-bottom: 30px;
padding: 0 15px;
grid-area: col1;

@media screen and (min-width: 1100px){
    margin-right: 10px;
}

`

export const Column2 = styled.div`
margin-bottom: 30px;
padding: 0 15px;
grid-area: col2;

@media screen and (min-width: 1100px){
    margin-left: 10px;
}
`


export const Container = styled.div`
    box-sizing: border-box;
    background-color: #e9c46a;
    margin: 30px auto;
    width: 100%;
    padding:0 15px 0 15px;
    



    @media screen and (max-width:768px){
        margin: 20px auto;
    }

`

export const ContactFormWrap = styled.form`
    width: 100%;
    padding: 10px;
    background-color: #56cfe1;
    

    &:hover{
        box-shadow: 1px 1px 4px 1px rgb(58,57,57);
    }

`

export const ContactLabel = styled.label`
    display: block;
    margin-bottom: 10px;
    margin-top: 10px;
    font-family: 'Source Code Pro', monospace;
`

export const ContactInput = styled.input`
    width:100%;
    margin:o auto;
    padding: 10px;
    border:none;
    box-shadow: 1px 1px 4px 1px rgb(58,57,57);
    font-family: 'Source Code Pro', monospace;
`

export const ContactTextArea = styled.textarea`
    width:100%;
    margin:o auto;
    padding: 10px;
    border:none;
    box-shadow: 1px 1px 4px 1px rgb(58,57,57);
    height:100px;
    font-family: 'Source Code Pro', monospace;
`


export const ContactItem = styled.div`
    margin: 10px 0;
`


