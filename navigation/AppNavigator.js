import { StackNavigator } from 'react-navigation';

import AllPolls from '../components/AllPolls';
import Chart from '../components/Chart';
import Menu from '../components/Menu';
import NewPoll from '../components/NewPoll';

export default StackNavigator(
  {
    AllPolls: { screen: AllPolls },
    Chart: { screen: Chart },
    Menu: { screen: Menu },
    NewPoll: { screen: NewPoll },
  },
  {
    headerMode: 'none',
  },
);
