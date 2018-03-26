import firebase from 'firebase';

export default async id => {
  const {
    currentUser,
  } = firebase.auth();
  const { uid } = currentUser;

  const model = await firebase
    .database()
    .ref(`/state/${uid}/${id}`);

  const snapshot = await model.once(
    'value',
  );

  return snapshot.val();
};
