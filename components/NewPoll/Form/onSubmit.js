import _ from 'lodash';
import submitPoll from '../../../state/polls/submitPoll';

export default (
  changeState,
  { dispatch, history, polls },
  { name, yes, no },
) => {
  name = name.trim();
  yes = yes.trim();
  no = no.trim();
  let nameRepeat = false;
  _.forEach(polls, (v, k) => {
    if (v.name === name) {
      nameRepeat = true;
    }
  });

  yes = _.uniq(
    yes.split(',').map(x => x.trim()),
  ).join(',');
  no = _.uniq(
    no.split(',').map(x => x.trim()),
  ).join(',');

  const invalidObj = {
    nameInvalid: !name || nameRepeat,
    yesInvalid: !yes,
    noInvalid: !no,
  };
  Object.keys(invalidObj).map(x =>
    changeState(x, invalidObj[x]),
  );

  const invalid = Object.values(
    invalidObj,
  ).reduce((a, b) => a || b);

  dispatch(
    submitPoll(
      invalid,
      { name, yes, no },
      dispatch,
      history,
    ),
  );
};
