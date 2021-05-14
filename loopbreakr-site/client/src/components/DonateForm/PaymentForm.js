import React, {useState} from 'react'
import {CardElement, useElements, useStripe} from '@stripe/react-stripe-js'
import axios from 'axios'
import { AmountButton, FormText} from './PaymentFormElements';
import { Button } from '../Common/CommonElements';

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#fff",
			color: "#fff",
			fontWeight: 500,
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fff" },
			"::placeholder": { color: "#fff" }
		},
		invalid: {
			iconColor: "#fff",
			color: "red"
		}
	}
}



export default function PaymentForm() {
    const [amountVal, setAmountVal] = useState(0);
    const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()
    


    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


    if(!error) {
        try {
            const {id} = paymentMethod
            const response = await axios.post("http://localhost:3000/donationform", {
                amount: {amountVal},
                id
            })

            if(response.data.success) {
                console.log("Successful payment")
                setSuccess(true)
            }

        } catch (error) {
            console.log("Error", error)
        }
    } else {
        console.log(error.message)
    }
}

    return (
        <>
        {!success ? 
        <div>
            
            <div>
            <AmountButton onClick={() => setAmountVal(100)}>$1</AmountButton>
            <AmountButton onClick={() => setAmountVal(500)}>$5</AmountButton>
            <AmountButton onClick={() => setAmountVal(1000)}>$10</AmountButton>
            <AmountButton onClick={() => setAmountVal(2000)}>$20</AmountButton>
            <AmountButton onClick={() => setAmountVal(5000)}>$50</AmountButton>
            </div>

        <form onSubmit={handleSubmit}>
            <FormText style={{ color: '#fff' }}>${amountVal/100}.00</FormText>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <Button >Pay</Button>
        </form>
        </div>
        :
       <div>
           <FormText style={{ color: '#fff' }}>You're the best! If you have any questions about your donation, you can reach out to us at loopbreak@loopbreakr.com</FormText>
       </div> 
        }
            
        </>
    )
}