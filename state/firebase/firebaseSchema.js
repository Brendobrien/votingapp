const FacebookObj = {};
const ReduxObj = {};
const schema = {
  data: {
    uid: {
      timestamp: { ReduxObj },
    },
  },
  polls: {
    uid_id: {
      name: 'example',
      yes: 'a, b, c',
      no: 'e, d, f',
    },
  },
  state: {
    uid: {
      language: 'English',
      user: { FacebookObj },
    },
  },
  votes: {
    uid_id: {
      'uid||ip': {
        type: 'yes',
        why: 'b',
      },
    },
  },
};
