import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.VUE_APP_API_KEY,
    authDomain: "immortal-soul.firebaseapp.com",
    projectId: "immortal-soul",
    storageBucket: "immortal-soul.appspot.com",
    messagingSenderId: process.env.VUE_APP_MESSAGIN_SENDER_ID,
    appId: process.env.VUE_APP_FIREBASE_APP_ID,
    measurementId: process.env.VUE_APP_MEASUREMENT_ID
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}