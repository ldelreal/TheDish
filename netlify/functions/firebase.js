const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyABP5yv9TuxjLgXYkverpi4_YR-OqSaTFY",
  authDomain: "dish-8e9fb.firebaseapp.com",
  projectId: "dish-8e9fb",
  storageBucket: "dish-8e9fb.appspot.com",
  messagingSenderId: "921403644538",
  appId: "1:921403644538:web:edfd3efdcf750daaccf9c3"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase