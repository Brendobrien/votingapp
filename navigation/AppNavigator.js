import { StackNavigator } from 'react-navigation';

// navigation
import Root from './Root';

export default StackNavigator(
  {
    Root: { screen: Root },
  },
  {
    headerMode: 'none',
  },
);
