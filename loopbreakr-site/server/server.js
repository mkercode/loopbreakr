const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)

const app = express();
app.use(cors());
app.use(express.urlencoded())
app.use(express.json());
app.use("/", router);

app.listen(process.env.PORT || 3000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });

  app.post("/donationform", cors(), async (req, res) => {
    let { amount, id } = req.body
    
    try {
      const payment = await stripe.paymentIntents.create({
        amount,
        currency: "USD",
        description: "Loopbreakr",
        payment_method: id,
        confirm: true
      })
      console.log("Payment", payment)
      res.json({
        message: "Payment successful",
        success: true
      })
    } catch (error) {
      console.log("Error", error)
      res.json({
        message: "Payment failed",
        success: false
      })
    }
  })
 
  router.post("", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    const mail = {
      from: name,
      to: "mkercode@gmail.com",
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
  });