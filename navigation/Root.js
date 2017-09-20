import { StackNavigator } from 'react-navigation';

// components
import Start from '../components/Start';

export default StackNavigator(
  {
    Start: { screen: Start },
  },
  {
    headerMode: 'screen',
    cardStyle: {
      backgroundColor: 'white',
    },
  },
);
