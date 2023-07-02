import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

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

export const storage = getFirestore(app);

// const colRef = collection(storage, "packages");

export async function setUserDB(id:string,email:string) {
  const usersRef = collection(storage,"users");
  await setDoc(doc(usersRef, id),{
    email:email,
  })
}
  

// export const testing = () => {
//   console.log("Просто вызов");

//   // getDocs(colRef)
//   //   .then((snapshot) => {
//   //     let packages:any[] = [];
//   //     snapshot.docs.forEach((doc) => {
//   //       packages.push({...doc.data(), id:doc.id});
//   //     });
//   //     console.log(packages);
//   //   })
//   //   .catch((err) => {
//   //     console.log("error!");

//   //     console.log(err);
//   //   });

// };

// export async function getFirstPackage() {
//   let packageTitle:{title:string, id:string}={title:"",id:""};
//   const packageRef = doc(storage, "packages", "0");
//   const cardsRef = doc(storage, "packages", "0", "cards", "0");
//   const packageSnap = await getDoc(packageRef);
//   const cardsSnap = await getDoc(cardsRef);

//   if (packageSnap.exists()&&cardsSnap.exists()) {
//     let data = packageSnap.data();
//     let data2 = cardsSnap.data();
//     console.log("Document data:", data2);
//     packageTitle.title=data.title;
//     packageTitle.id=data2.name[0];
//     console.log(packageTitle,"sss");
    
//     return packageTitle;
//   } else {
//     // docSnap.data() will be undefined in this case
//     console.log("No such document!");
//   }
// }
