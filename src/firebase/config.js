import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBUD9KeSe3_ko0ma2cqgKiUTZY1oRrRTS8",
    authDomain: "cooking-ninja-site-1bf00.firebaseapp.com",
    projectId: "cooking-ninja-site-1bf00",
    storageBucket: "cooking-ninja-site-1bf00.appspot.com",
    messagingSenderId: "982427229464",
    appId: "1:982427229464:web:90cc47c87dd59df998526d"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export {
    projectFirestore
}