import firebase from "firebase";
//import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyAXU4Q0EPYkk5CD1I8071xZg3rc5fFfCHI",
  authDomain: "ubereatsclone-rn.firebaseapp.com",
  projectId: "ubereatsclone-rn",
  storageBucket: "ubereatsclone-rn.appspot.com",
  messagingSenderId: "120170311255",
  appId: "1:120170311255:web:f18d1799d7b7ac4484bd12",
};

!firebase.apps.legth ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
