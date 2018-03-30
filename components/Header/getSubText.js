import { Platform } from 'react-native';
import queryString from 'query-string';
import { routes } from '../../navigation/mapRoutes';
import getPollText from './getPollText';

export default props => {
  const {
    loading,
    location,
    nav,
    polls,
  } = props;
  const [routeName, params] =
    Platform.OS === 'web'
      ? [
          routes[location.pathname],
          queryString.parse(
            location.search,
          ),
        ]
      : [
          nav.routes[nav.index]
            .routeName,
          nav.routes[nav.index].params,
        ];

  const pollText = getPollText(
    params,
    polls,
    routeName,
  );

  const subText = {
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
    ...pollText,
    Four04: {
      color: 'blue',
      text: {
        English: '404',
        Spanish: '404',
      },
    },
  };

  return (
    subText[routeName] || subText.Four04
  );
};
