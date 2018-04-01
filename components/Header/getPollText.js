const Four04 = {
  color: 'blue',
  text: {
    English: '404',
    Spanish: '404',
  },
};

export default (
  params,
  polls,
  routeName,
) => {
  const subText = {
    PollWhy: Four04,
    PollYesNo: Four04,
  };
  if (
    params &&
    params.pollId &&
    polls[params.pollId]
  ) {
    const { name } = polls[
      params.pollId
    ];

    if (routeName === 'PollWhy') {
      if (params.type === 'yes') {
        subText.PollWhy = {
          color: 'green',
          text: {
            English: `${name}\nWhy?`,
            Spanish: `${name}\n¿Por Qué?`,
          },
        };
      } else if (params.type === 'no') {
        subText.PollWhy = {
          color: 'red',
          text: {
            English: `${name}\nWhy?`,
            Spanish: `${name}\n¿Por Qué?`,
          },
        };
      }
    } else if (
      routeName === 'PollYesNo'
    ) {
      subText.PollYesNo = {
        color: 'blue',
        text: {
          English: `${name}\nYou Like This?`,
          Spanish: `${name}\n¿Te Gusta?`,
        },
      };
    }
  }

  return subText;
};
