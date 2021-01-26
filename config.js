import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyDuDg9tdu6aAEbmsljVQR_SYqwSn_DtquQ",
  authDomain: "book-ee65d.firebaseapp.com",
  projectId: "book-ee65d",
  storageBucket: "book-ee65d.appspot.com",
  messagingSenderId: "618951965095",
  appId: "1:618951965095:web:d50500933c987552231e82"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
