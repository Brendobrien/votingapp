import firebase from 'firebase';

export default async (
  obj,
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

  await model.update(obj);
};
