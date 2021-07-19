const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
// const { google } = require("googleapis");
// const OAuth2 = google.auth.OAuth2;
// const path = require("path");
const cors = require("cors");
const app = express();

require("dotenv").config();

app.use(cors());
app.use(bodyParser.urlencoded({ exended: true }));
app.use(bodyParser.json());

app.post("/api/form", (req, res) => {
  let data = req.body;
  const output = `
    <h3>Contact Details</h3>
    <ul>
        <li>Name: ${data.name}</li>
        <li>Email: ${data.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${data.message}</p>
  `;

  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: process.env.EMAIL, // generated ethereal user
      pass: process.env.PASSWORD, // generated ethereal password
    },
  });

  let mailOptions = {
    from: `Contact Form <${data.email}>`,
    to: "namddanh@gmail.com, namrday@gmail.com",
    subject: `Message from ${data.name} connecting from Contact Form`,
    generateTextFromHTML: true,
    html: output,
  };

  smtpTransporter.sendMail(mailOptions, (error, response) => {
    error ? console.log("Error occured: ", error) : console.log(response);
    smtpTransporter.close();
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server starting at port ${PORT}`);
});
