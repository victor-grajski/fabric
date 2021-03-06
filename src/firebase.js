import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "YOUR API KEY HERE",
    authDomain: "fabric-754fe.firebaseapp.com",
    databaseURL: "https://fabric-754fe.firebaseio.com",
    projectId: "fabric-754fe",
    storageBucket: "fabric-754fe.appspot.com",
    messagingSenderId: "149734389056"
};

firebase.initializeApp(config);
const auth = firebase.auth();

// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();

// Disable deprecated features
db.settings({
  timestampsInSnapshots: true
});

export default firebase;
export {db}
export {auth}
