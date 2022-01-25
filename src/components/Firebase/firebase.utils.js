import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
   apiKey: process.env.REACT_APP_API_KEY,
   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
   projectId: process.env.REACT_APP_PROJECT_ID,
   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
   appId: process.env.REACT_APP_APP_ID,
   measurementId: process.env.REACT_APP_MESSUREMENT_ID,
   databaseURL: process.env.REACT_APP_DATABASE_URL
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app)
// google authentication
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({
   promt: 'select_account'
});
