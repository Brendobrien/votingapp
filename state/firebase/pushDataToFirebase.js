import firebase from 'firebase';

export default async obj => {
  if (firebase.apps.length) {
    const {
      currentUser,
    } = firebase.auth();

    if (currentUser) {
      const { uid } = currentUser;
      const id = Date.now();
      const model = await firebase
        .database()
        .ref(`/data/${uid}/${id}`);

      await model.update(obj);
    }
  }
};
