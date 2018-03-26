import firebase from 'firebase';

export default async (
  id,
  obj,
  userid,
) => {
  const {
    currentUser,
  } = firebase.auth();
  const uid = userid || currentUser.uid;

  const model = await firebase
    .database()
    .ref(`/state/${uid}/${id}`);

  await model.update(obj);
};
