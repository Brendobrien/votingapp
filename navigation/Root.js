import { StackNavigator } from 'react-navigation';

// components
import Login from '../components/Login';
import Start from '../components/Start';

export default StackNavigator(
  {
    Start: { screen: Start },
    Login: { screen: Login },
  },
  {
    headerMode: 'screen',
    cardStyle: {
      backgroundColor: 'white',
    },
  },
);
