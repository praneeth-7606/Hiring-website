// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4YiDKMf_0KmNVwdAbFt6Kh2IOdGr-59c",
  authDomain: "hiringwebsite-e8e71.firebaseapp.com",
  projectId: "hiringwebsite-e8e71",
  storageBucket: "hiringwebsite-e8e71.appspot.com",
  messagingSenderId: "979695946402",
  appId: "1:979695946402:web:7bf9ab2c4b947a4d9f65fb",
  measurementId: "G-Q8RG06Q2DL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const auth = firebase.auth();
// const analytics = getAnalytics(app);
export default app;