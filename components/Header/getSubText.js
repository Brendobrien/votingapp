import { Platform } from 'react-native';

export default props => {
  const { loading, location, nav } = props;
  const urls = {
    '/': 'Menu',
    '/all-polls': 'AllPolls',
    '/new-poll': 'NewPoll',
  };
  const routeName =
    Platform.OS === 'web'
      ? urls[location.pathname]
      : nav.routes[nav.index].routeName;
  const info = {
    AllPolls: {
      color: 'orange',
      text: 'All Polls',
    },
    Menu: {
      color: '#9F64C0',
      text: 'Menu',
    },
    NewPoll: {
      color: 'red',
      text: 'New Poll',
    },
  };
  const fallback = {
    color: 'green',
    text: 'My Polls',
  };

  return info[routeName] || fallback;
};
