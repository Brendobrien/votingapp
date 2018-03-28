import submitPoll from '../../../state/polls/submitPoll';

export default (
  changeState,
  { dispatch, history },
  { name, yes, no },
) => {
  const invalidObj = {
    nameInvalid: !name,
    yesInvalid: !yes,
    noInvalid: !no,
  };
  Object.keys(invalidObj).map(x =>
    changeState(x, invalidObj[x]),
  );

  const valid = Object.values(
    invalidObj,
  ).reduce((a, b) => a || b);

  dispatch(
    submitPoll(
      valid,
      { name, yes, no },
      dispatch,
      history,
    ),
  );
};
