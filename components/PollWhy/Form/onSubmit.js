import submitReason from '../../../state/polls/submitReason';

export default (
  changeState,
  { dispatch, history, params, polls },
  { reason },
) => {
  reason = reason.trim();
  const reasons = polls[params.pollId][
    params.type
  ]
    .split(',')
    .map(x => x.trim());
  const invalidObj = {
    reasonInvalid:
      !reason ||
      reasons.includes(reason),
  };
  Object.keys(invalidObj).map(x =>
    changeState(x, invalidObj[x]),
  );

  const invalid = Object.values(
    invalidObj,
  ).reduce((a, b) => a || b);

  dispatch(
    submitReason(
      invalid,
      polls,
      params.pollId,
      reason,
      params.type,
    ),
  );
};
