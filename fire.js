const firebase = require('firebase')
const data = require('./data/creds')
require('firebase/firestore')
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBnyyiIe-0S_HbrIkf6SrFUdOlG5oiS4Gs",
    authDomain: "cucumber-backend.firebaseapp.com",
    projectId: "cucumber-backend",
    storageBucket: "cucumber-backend.appspot.com",
    messagingSenderId: "156693360424",
    appId: "1:156693360424:web:2b40167239b1744021aa1d",
    measurementId: "G-1C8DQQNRBQ"
  };
  const fire = firebase.initializeApp(firebaseConfig);
  const fs = firebase.firestore()

  const db = fs
        .collection('data')
        .doc(data.documentId)

  module.exports = {fs, fire, db}