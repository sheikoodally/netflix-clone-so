import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD1g3eO4_gKH_B-4XCTmJLdYcSEmJC2n6g",
  authDomain: "netflix-clone-so.firebaseapp.com",
  projectId: "netflix-clone-so",
  storageBucket: "netflix-clone-so.appspot.com",
  messagingSenderId: "1058060383149",
  appId: "1:1058060383149:web:84000e05cb1bbff6faa724"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth();

export {auth};
export default db;