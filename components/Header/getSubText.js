import { Platform } from 'react-native';
import queryString from 'query-string';
import { routes } from '../../navigation/mapRoutes';

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
    PollYesNo: {
      color: 'blue',
      text: {
        English:
          params && params.pollId
            ? polls[
                params.pollId
              ].name.substring(0, 25)
            : 'Poll: Yes or No',
        Spanish:
          params && params.pollId
            ? polls[
                params.pollId
              ].name.substring(0, 25)
            : 'Encuesta: Si o No',
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
