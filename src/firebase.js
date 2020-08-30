import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBlhXFxFYbnud-gbwbr4PMaoBuw2dYISiA",
  authDomain: "uwc-lecture-app.firebaseapp.com",
  databaseURL: "https://uwc-lecture-app.firebaseio.com",
  projectId: "uwc-lecture-app",
  storageBucket: "uwc-lecture-app.appspot.com",
  messagingSenderId: "699213194444",
  appId: "1:699213194444:web:69318dea42cb54a303ce69",
  measurementId: "G-VC7HG20Y0P",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
