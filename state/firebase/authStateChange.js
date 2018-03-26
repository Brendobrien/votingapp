import firebase from 'firebase';
import getFirebaseUser from '../firebase/getFirebaseUser';
import setLoading from '../loading/setLoading';

export default dispatch => {
  // Listen for authentication state to change.
  firebase
    .auth()
    .onAuthStateChanged(user => {
      if (user != null) {
        dispatch(getFirebaseUser());
      } else {
        dispatch(setLoading(false));
      }
    });
};
