import React, { useState } from "react";
import {Container, ContactLabel, ContactTextArea, ContactInput, ContactItem, ContactFormWrap, SubmitButton} from './ContactElements.js'

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch( process.env.PUBLIC_URL || "http://localhost:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };

  return (
    <Container>
    <ContactFormWrap onSubmit={handleSubmit}>


      <ContactItem>
        <ContactLabel htmlFor="name">Name:</ContactLabel>
        <ContactInput type="text" id="name" label for="Name here..." required />
      </ContactItem>

      <ContactItem>
        <ContactLabel htmlFor="email">Email:</ContactLabel>
        <ContactInput type="email" id="email" label for="Email here..." required /> 
      </ContactItem>

      <ContactItem>
        <ContactLabel htmlFor="message">Message:</ContactLabel>
        <ContactTextArea id="message" label for="Message here..." required />
      </ContactItem>
 
      <SubmitButton type="submit">{status}</SubmitButton>
 
    </ContactFormWrap>
    </Container>
  );
};

export default ContactForm;