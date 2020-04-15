const functions = require('firebase-functions');
const express = require('express');

const app = express();
app.get('/hello', (request, response) => {
  response.send("Hello from Firebase!");
});

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


exports.app = functions.https.onRequest(app);