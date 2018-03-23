import { StackNavigator } from 'react-navigation';

import AllPolls from '../components/AllPolls';
import Chart from '../components/Chart';
import Menu from '../components/Menu';

export default StackNavigator(
  {
    AllPolls: { screen: AllPolls },
    Chart: { screen: Chart },
    Menu: { screen: Menu },
  },
  {
    headerMode: 'none',
  },
);
