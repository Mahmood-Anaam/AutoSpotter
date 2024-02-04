
import * as firebase from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import {initializeFirestore,CACHE_SIZE_UNLIMITED,getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDo6fgi3GLw1I3XBDwu3ZU1mbWmS2DFhZM",
  authDomain: "autospotter-ad598.firebaseapp.com",
  projectId: "autospotter-ad598",
  storageBucket: "autospotter-ad598.appspot.com",
  messagingSenderId: "928109315099",
  appId: "1:928109315099:web:645813424e527fdf2c24be"
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDBLC9fhnadHS8oGKrbvwQuCJ-c1RHNtbE",
//   authDomain: "autospotter-290bc.firebaseapp.com",
//   projectId: "autospotter-290bc",
//   storageBucket: "autospotter-290bc.appspot.com",
//   messagingSenderId: "805115554900",
//   appId: "1:805115554900:web:a1e0f14ffe38a9d8e991c1"
// };

const app = firebase.initializeApp(firebaseConfig);

initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

initializeFirestore(app, { cacheSizeBytes:CACHE_SIZE_UNLIMITED });

const db = getFirestore();




export { app, db };