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
      text: 'Todos Personas',
    },
    Menu: {
      color: '#9F64C0',
      text: 'Menú',
    },
    NewPoll: {
      color: 'red',
      text: 'Nueva Persona',
    },
    fallback: {
      color: 'green',
      text: 'Mis Personas',
    },
  };

  return info[routeName] || info.fallback;
};
