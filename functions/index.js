// Import the Firebase SDK for Google Cloud Functions.
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.setupNewUser = functions.auth.user().onCreate(event => {
  const user = event.data;

  admin.database().ref('/users/' + user.uid).set({
    name: user.displayName,
    created: new Date().toISOString(),
    createdBy: user.uid
  });
});
