import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getFirestore(app);

const colRef = collection(storage, "users");

export const testing = () => {
  console.log("Просто вызов");

  getDocs(colRef)
    .then((snapshot) => {
      let users:any[] = [];
      snapshot.docs.forEach((doc) => {
        users.push({...doc.data(), id:doc.id});
      });
      console.log(users);
    })
    .catch((err) => {
      console.log("error!");

      console.log(err);
    });
    
};
