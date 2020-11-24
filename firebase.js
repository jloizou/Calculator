import firebase from "@firebase/app";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBbX_-22DXQi8g4zHbNXyWGdAj5_db_-aY",
    authDomain: "calculator-a607b.firebaseapp.com",
    databaseURL: "https://calculator-a607b.firebaseio.com",
    projectId: "calculator-a607b",
    storageBucket: "calculator-a607b.appspot.com",
    messagingSenderId: "676596241107",
    appId: "1:676596241107:web:873239d1ba5f5b9204ba26",
    measurementId: "G-C4KCW6BTDY"
  };
firebase.initializeApp(firebaseConfig);

export default firebase;
