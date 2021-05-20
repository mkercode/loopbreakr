import React from 'react'
import {InfoContainer, InfoWrapper, InfoRow, Column1, Column2, ImgWrap, TextWrapper, Heading, Subtitle, Img} from '../Common/CommonElements.js'
import {Elements} from '@stripe/react-stripe-js'
import {loadStripe} from "@stripe/stripe-js"
import PaymentForm from './PaymentForm.js'

const PUBLIC_KEY = 'pk_test_51IdPguFGdfQ456uy7Te0bA2yXzbfiMdZFAsdfcBPAevm0o6jF611O729ZLGlco70cnpymlrIduEHUd62qL0AtE410065xybOXh'
const stripeTestPromise = loadStripe(PUBLIC_KEY)


const DonateForm = ({color, id, topLine, lightText, headLine, darkText, description, img, alt}) => {

    return (
        <InfoContainer style={{backgroundColor: color, minHeight:'750px'}} id={id}>
        <InfoWrapper >
            <InfoRow style={{marginTop:'120px'}}>
                
                <Column1>
                    <ImgWrap>
                        <Img src={img} alt ={alt} style={{ maxHeight:'400px'}} />
                    </ImgWrap>
                </Column1>

                <Column2 >

                    <TextWrapper >
                        <Heading lightText={lightText}>{headLine}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        </TextWrapper>

                        <Elements stripe={stripeTestPromise}>
                            <PaymentForm/>
                        </Elements>
                    
                    
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
        )
    }

export default DonateForm
