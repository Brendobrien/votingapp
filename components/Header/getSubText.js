import { Platform } from 'react-native';
import { routes } from '../../navigation/mapRoutes';

export default props => {
  const {
    loading,
    location,
    nav,
  } = props;
  const routeName =
    Platform.OS === 'web'
      ? routes[location.pathname]
      : nav.routes[nav.index].routeName;

  console.log(routeName);
  const info = {
    AllPolls: {
      color: 'orange',
      text: {
        English: 'All Polls',
        Spanish: 'Todas Encuestas',
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
        English: 'New Poll',
        Spanish: 'Nueva Encuesta',
      },
    },
    MyPolls: {
      color: 'green',
      text: {
        English: 'My Polls',
        Spanish: 'Mis Encuestas',
      },
    },
    fallback: {
      color: 'blue',
      text: {
        English: '404',
        Spanish: '404',
      },
    },
  };

  return (
    info[routeName] || info.fallback
  );
};
