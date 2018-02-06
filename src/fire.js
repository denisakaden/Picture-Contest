import * as firebase from 'firebase';

const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
   apiKey: "AIzaSyDfk1SYB2ah4LvVgTizcIjGX2UNUBR3O28",
    authDomain: "picturecontest-f180e.firebaseapp.com",
    databaseURL: "https://picturecontest-f180e.firebaseio.com",
    projectId: "picturecontest-f180e",
    storageBucket: "picturecontest-f180e.appspot.com",
    messagingSenderId: "401630123173"
};
let fire = firebase.initializeApp(config);


export default fire;
