import firebase from 'firebase';

export default async (id, userid) => {
  const {
    currentUser,
  } = firebase.auth();
  const uid = userid || currentUser.uid;

  const model = await firebase
    .database()
    .ref(`/state/${uid}/${id}`);

  const snapshot = await model.once(
    'value',
  );

  return snapshot.val();
};
