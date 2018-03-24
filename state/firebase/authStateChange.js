import firebase from 'firebase';

export default getFirebaseUser => {
  // Listen for authentication state to change.
  firebase.auth().onAuthStateChanged(user => {
    if (user != null) {
      console.log('We are authenticated now!');
      getFirebaseUser();
    } else {
      console.log('Not authenticated');
    }
  });
};
