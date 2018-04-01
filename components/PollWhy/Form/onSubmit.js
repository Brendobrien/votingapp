import submitReason from '../../../state/polls/submitReason';

export default (
  changeState,
  { dispatch, history, params, polls },
  { reason },
) => {
  const invalidObj = {
    reasonInvalid: !reason,
  };
  Object.keys(invalidObj).map(x =>
    changeState(x, invalidObj[x]),
  );

  const invalid = Object.values(
    invalidObj,
  ).reduce((a, b) => a || b);

  dispatch(
    submitReason(
      true,
      polls,
      params.pollId,
      reason,
      params.type,
    ),
  );
};
