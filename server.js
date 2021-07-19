const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const path = require("path");
const cors = require("cors");
const app = express();

require("dotenv").config();

app.use(cors());
app.use(bodyParser.urlencoded({ exended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

app.post("/api/form", (req, res) => {
  let data = req.body;
  const output = `
    <div style="margin:0;padding:0;">
        <table 
            role="presentation" 
            style="width:602px; 
            border-collapse: collapse; 
            border-spacing: 0; 
            text-align:left;"
        >
            <tr> 
                <td align="center" style="padding:40px 0 30px 0;">
                    <img src="images/ENSO_LOGOTRANSPARENT.png" alt="" width="300px" style="height:auto;display:block;" />
                </td>
            </tr>
            <tr>
                <td style="
                    padding:3px 10px; 
                    border: 3px solid #e34946; 
                    border-bottom: none;"
                >
                    <h3>Contact Info</h3>
                    <p>Name: ${data.name}</p>
                    <p>Email: ${data.email}</p>
                </td>
            </tr>
            <tr>
                <td style="
                    padding:5px 10px; 
                    border: 3px solid #2f2e2e;"
                >
                    <h3>Message</h3>
                    <p>${data.message}</p>
                </td>
            </tr>
        </table>
    </div>
  `;

  const oauth2Client = new OAuth2(
    process.env.CLIENTID,
    process.env.CLIENTSECRET,
    "https://developers.google.com/oauthplayground" // Redirect URL
  );

  oauth2Client.setCredentials({
    refresh_token: process.env.REFRESHTOKEN,
  });

  const accessToken = oauth2Client.getAccessToken();

  let smtpTransporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      type: "OAuth2",
      user: process.env.EMAIL, // generated ethereal user
      pass: process.env.PASSWORD, // generated ethereal password
      clientId: process.env.CLIENTID,
      clientSecret: process.env.CLIENTSECRET,
      refreshToken: process.env.REFRESHTOKEN,
      accessToken: accessToken,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let mailOptions = {
    from: `Contact Form <${data.email}>`,
    to: "namddanh@gmail.com, namrday@gmail.com", //TODO: Change this later to ensoshowcase@gmail.com
    subject: `Connecting from Contact Form`,
    generateTextFromHTML: true,
    html: output,
  };

  // send mail with defined transport object
  smtpTransporter.sendMail(mailOptions, (error, response) => {
    error ? console.log("Error occured: ", error) : console.log(response);
    smtpTransporter.close();
  });
});

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server starting at port ${PORT}`);
});
