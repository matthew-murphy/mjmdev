import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database'
import 'firebase/compat/storage'
import 'firebase/compat/app-check'
import Axios from 'axios'

// Initialize Firebase
let config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
}

const app = firebase.initializeApp(config)

const db = firebase.firestore()

// initializeAppCheck(app, {
//   provider: new ReCaptchaV3Provider(process.env.REACT_APP_SITE_KEY),
//   isTokenAutoRefreshEnabled: true,
// });


const appCheck = firebase.appCheck();
// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.
appCheck.activate(
  process.env.REACT_APP_SITE_KEY,

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  false);

export { Axios, db, app }