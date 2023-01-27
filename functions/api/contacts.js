const functions = require('firebase-functions');
const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { initDb } = require('../config/db');

const db = initDb.firestore();

const secretKey = '6Le0oP4jAAAAAE8vjCiuntDJprDKzZHEgczu1wsF';

var fetch = require('node-fetch');
 
// verify reCAPTCHA response
router.post('/verify',
(req, res) => {
  var VERIFY_URL = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body['g-recaptcha-response']}`;
  console.log(VERIFY_URL);
  console.log(req.body);
  sendEmail(req.body);
  db.collection('contacts').add(req.body);
  return fetch(VERIFY_URL, { method: 'POST' })
    .then(res => res.json())
    .then(json => res.send(json));
});


// send email
const sendEmail = (entry) => {
  const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: functions.config().gmail.email,
      pass: functions.config().gmail.password
    }
  });

  mailTransport.sendMail({
    from: entry.email,
    replyTo: entry.email,
    to: functions.config().gmail.email,
    subject: `pantaley.com ${entry.email}`,
    text: entry.message,
    html: `<p>${entry.message}</p>`
  });
};


module.exports = router;