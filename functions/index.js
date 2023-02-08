const express = require("express");
const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors");
const { initDb } = require("./config/db");
const request = require('request');
const db = initDb.firestore();

// config variables
// To add new env config variables to Firebase Functions run:
// firebase functions:config:set someservice.key="THE API KEY" someservice.id="THE CLIENT ID" (https://firebase.google.com/docs/functions/config-env)
const username = functions.config().gmail.email;
const password = functions.config().gmail.password;
const secretKey = functions.config().recaptcha.secretkey;

const app = express();
app.use(cors({ origin: true }));

let transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: username,
    pass: password,
  },
});

const verifyRecaptcha = (token, returnData) => {

  let url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
  request(url, (err, response, body) => {
    body = JSON.parse(body);
    if (!body.success) {
      body["status"] = false;
      body["message"] = "reCAPTCHA failed";
    } else {
      body["status"] = true;
      body["message"] = "reCAPTCHA passed";
    }
    returnData(body);
  });
};

app.post('/', async (req, res) => {
  const data = req.body;
  const recaptchaToken = data['g-recaptcha-response'];
  const email = data.email;
  const name = data.name;
  const message = data.message;

  if (data['g-recaptcha-response'] === undefined || data['g-recaptcha-response'] === '' || data['g-recaptcha-response'] === null) {
    return res.status(401).send({ "status": false, "errSource": "recaptcha", "message": "Client-side reCAPTCHA token not found." });
  }

  verifyRecaptcha(recaptchaToken, (result) => {
    if (result.status) {
      db.collection("emails").add({
        name: data.name,
        email: data.email,
        message: data.message,
        time: new Date(),
      });

      const mailOptions = {
        from: "mjmdev.app <matthewmrph40@gmail.com>",
        to: "matthewmrph40@gmail.com",
        subject: "mjmdev.app Contact Form Message",
        html:
          `
            <div>
              From:` + name + `<br /><br />
              Email: ` + email + `<br /><br />
              Message: ` + message + `<br /><br />
            </div>
          `,
      };

      return transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return res.status(404).send(error.toString());
        }
        return res.status(200).send("Sent");
      });
    } else {
      return res.status(401).send("reCAPTCHA failed");
    }
  });  
});

exports.sendEmail = functions.https.onRequest(app);