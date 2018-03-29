import _ from 'lodash';
export const routes = {
  '/': 'Menu',
  '/all-polls': 'AllPolls',
  '/info': 'Info',
  '/new-poll': 'NewPoll',
  '/my-polls': 'MyPolls',
  '/poll-why': 'PollWhy',
  '/poll-yes-no': 'PollYesNo',
};

export const urls = _.invert(routes);
