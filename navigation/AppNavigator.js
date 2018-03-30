import { StackNavigator } from 'react-navigation';

import AllPolls from '../components/AllPolls';
import Info from '../components/Info';
import Menu from '../components/Menu';
import MyPolls from '../components/MyPolls';
import NewPoll from '../components/NewPoll';
import PollWhy from '../components/PollWhy';
import PollYesNo from '../components/PollYesNo';

export default StackNavigator(
  {
    AllPolls: { screen: AllPolls },
    Info: { screen: Info },
    Menu: { screen: Menu },
    MyPolls: { screen: MyPolls },
    NewPoll: { screen: NewPoll },
    PollWhy: { screen: PollWhy },
    PollYesNo: { screen: PollYesNo },
  },
  {
    headerMode: 'none',
  },
);
