import React, { useEffect, useState } from 'react'
import { db } from '../firebase/firebaseConfig'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './style.css'


const ContactForm = () => {
  const [formData, setFormData] = useState({})
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(false)

  const updateInput = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = event => {
    event.preventDefault()
    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(process.env.REACT_APP_SITE_KEY, { action: 'submit' })
        .then(token => {
          setToken(token)
          setLoading(false)
        })
        //error handling
        .catch(error => {
            setLoading(false)
            }
        )
    })
    sendEmail(token)
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

  const sendEmail = (token) => {
    fetch('https://us-central1-mjmdev-ab175.cloudfunctions.net/app/api/contacts/verify', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "name": formData.name,
        "email": formData.email,
        "message": formData.message,
        "g-recaptcha-response": token
      })
    }).then(res => {
        db.collection('emails').add({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date(),
        })
      })
      .catch(error => {
        console.log(error)
      }
    )
  }
  
  useEffect(() => {
    const loadScriptByURL = (id, url, callback) => {
      const isScriptExist = document.getElementById(id);
 
      if (!isScriptExist) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = url;
        script.id = id;
        script.onload = function () {
          if (callback) callback();
        };
        document.body.appendChild(script);
      }
 
      if (isScriptExist && callback) callback();
    }
 
    // load the script by passing the URL
    loadScriptByURL("recaptcha-key", `https://www.google.com/recaptcha/api.js?render=${process.env.REACT_APP_SITE_KEY}`);
  }, []);

  return (
    <>
      <Form onSubmit={handleSubmit} className="text-white">
        <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" placeholder="Name" onChange={updateInput} value={formData.name || ''} />
        </FormGroup>
        <FormGroup>
            <Label for="name">Email</Label>
            <Input type="email" name="email" placeholder="Email" onChange={updateInput} value={formData.email || ''} />
        </FormGroup>
        <FormGroup>
            <Label for="message">Message</Label>
            <Input type="textarea" name="message" placeholder="Message" onChange={updateInput} value={formData.message || ''} />
        </FormGroup>
        <small>This site is protected by reCAPTCHA and the Google 
          <a href="https://policies.google.com/privacy">Privacy Policy</a> and 
          <a href="https://policies.google.com/terms">Terms of Service</a> apply.
        </small>
        <br />
        <Button style={{marginTop: '10px'}} disabled={ !formData.name || !formData.email || !formData.message ? true : false }>{loading ? 'Submitting...' : 'Submit'}</Button>
      </Form>
    </>
  )
}

export default ContactForm