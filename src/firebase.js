import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCE_lxJvzm81YnAwWv0R3-5ShRU9nHOPYM",
    authDomain: "fabric-754fe.firebaseapp.com",
    databaseURL: "https://fabric-754fe.firebaseio.com",
    projectId: "fabric-754fe",
    storageBucket: "fabric-754fe.appspot.com",
    messagingSenderId: "149734389056"
};

firebase.initializeApp(config);
export default firebase;
