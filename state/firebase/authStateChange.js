import firebase from 'firebase';
import getFirebaseUser from '../firebase/getFirebaseUser';
import getPolls from '../polls/getPolls';
import getUserIP from '../user/getUserIP';
import getVotes from '../votes/getVotes';

export default dispatch => {
  // Listen for authentication state to change.
  firebase
    .auth()
    .onAuthStateChanged(user => {
      dispatch(getUserIP());
      if (user != null) {
        dispatch(getFirebaseUser());
      }
      dispatch(getPolls());
      dispatch(getVotes());
    });
};
