import { Platform } from 'react-native';

export default props => {
  const {
    loading,
    location,
    nav,
  } = props;
  const urls = {
    '/': 'Menu',
    '/all-polls': 'AllPolls',
    '/info': 'Info',
    '/new-poll': 'NewPoll',
  };
  const routeName =
    Platform.OS === 'web'
      ? urls[location.pathname]
      : nav.routes[nav.index].routeName;

  const info = {
    AllPolls: {
      color: 'orange',
      text: {
        English: 'All People',
        Spanish: 'Todos Personas',
      },
    },
    Info: {
      color: '#9F64C0',
      text: {
        English: 'Info',
        Spanish: 'Información',
      },
    },
    Menu: {
      color: '#9F64C0',
      text: {
        English: 'Menu',
        Spanish: 'Menú',
      },
    },
    NewPoll: {
      color: 'red',
      text: {
        English: 'New Person',
        Spanish: 'Nueva Persona',
      },
    },
    fallback: {
      color: 'green',
      text: {
        English: 'My People',
        Spanish: 'Mis Personas',
      },
    },
  };

  return (
    info[routeName] || info.fallback
  );
};
