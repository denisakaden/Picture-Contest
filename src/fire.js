import firebase from 'firebase';

const config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
   apiKey: "AIzaSyCcpVQftQzf_sbtJRuzxSBg5jyR4XCnPgo",
    authDomain: "pcrdb-65a00.firebaseapp.com",
    databaseURL: "https://pcrdb-65a00.firebaseio.com",
    projectId: "pcrdb-65a00",
    storageBucket: "pcrdb-65a00.appspot.com",
    messagingSenderId: "966583075981"
};
let fire = firebase.initializeApp(config);


export default fire;
