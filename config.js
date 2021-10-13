import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyAJFaJRP5iGS-RSa94Zzd-Km3ggYTuuo7M",
  authDomain: "complaint-forum-778a7.firebaseapp.com",
  projectId: "complaint-forum-778a7",
  storageBucket: "complaint-forum-778a7.appspot.com",
  messagingSenderId: "883283220925",
  appId: "1:883283220925:web:6b942eb80fda3beebb1ad4"
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

