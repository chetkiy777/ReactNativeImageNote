import * as firebase from 'firebase'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCz_LBgnHKRbrtq3be1yd1bEDzssZUMxp4",
    authDomain: "nativenote-bf915.firebaseapp.com",
    projectId: "nativenote-bf915",
    storageBucket: "nativenote-bf915.appspot.com",
    messagingSenderId: "766291501919",
    appId: "1:766291501919:web:479142f3332e72ad7cccea"
};

firebase.initializeApp(firebaseConfig)
export default firebase



