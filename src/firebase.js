import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const config = {
    authDomain: "m-city-1d70a.firebaseapp.com",
    databaseURL: "https://m-city-1d70a.firebaseio.com",
    projectId: "m-city-1d70a",
    storageBucket: "m-city-1d70a.appspot.com",
    messagingSenderId: "349161790109"
  };

  firebase.initializeApp(config);

  const firebaseDB = firebase.database();
  const firebaseMatches = firebaseDB.ref('matches');
  const firebasePromotions = firebaseDB.ref('promotions');

  export{
      firebase,
      firebaseMatches,
      firebasePromotions
  }
