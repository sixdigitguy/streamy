  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";

module.exports = function() {

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFsDGZdZmqK2xEeCByIhTS5aS0ome6olc",
  authDomain: "sixdigitguy.firebaseapp.com",
  projectId: "sixdigitguy",
  storageBucket: "sixdigitguy.appspot.com",
  messagingSenderId: "311697412044",
  appId: "1:311697412044:web:8708b587bdf4349f521769",
  measurementId: "G-3PDHHD5CDN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fireDb = firebase.firestore()
fireDb.settings( {timestamsInSnapshots: true} )

}