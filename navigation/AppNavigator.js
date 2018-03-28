import { StackNavigator } from 'react-navigation';

import AllPolls from '../components/AllPolls';
import Chart from '../components/Chart';
import Info from '../components/Info';
import Menu from '../components/Menu';
import MyPolls from '../components/MyPolls';
import NewPoll from '../components/NewPoll';

export default StackNavigator(
  {
    AllPolls: { screen: AllPolls },
    Chart: { screen: Chart },
    Info: { screen: Info },
    Menu: { screen: Menu },
    MyPolls: { screen: MyPolls },
    NewPoll: { screen: NewPoll },
  },
  {
    headerMode: 'none',
  },
);
