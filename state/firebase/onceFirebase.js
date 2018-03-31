import firebase from 'firebase';

export default async (
  root = 'state/',
  userid = true,
) => {
  const {
    currentUser,
  } = firebase.auth();
  const uid = userid
    ? `${currentUser.uid}/`
    : '';

  const model = firebase
    .database()
    .ref(`/${root}${uid}`);

  const snapshot = await model.once(
    'value',
  );

  return snapshot.val();
};
