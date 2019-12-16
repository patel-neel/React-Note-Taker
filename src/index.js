import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore')

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC_3JtuJdClkdLUoN354xRO7jemOaiuv_M",
    authDomain: "react-note-taking.firebaseapp.com",
    databaseURL: "https://react-note-taking.firebaseio.com",
    projectId: "react-note-taking",
    storageBucket: "react-note-taking.appspot.com",
    messagingSenderId: "82913215474",
    appId: "1:82913215474:web:0cb1e7a38ff1899c46616b",
    measurementId: "G-8X4ED9V0RH"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
