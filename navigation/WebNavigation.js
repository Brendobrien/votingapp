import { Switch, Route } from 'react-router-dom';

import AllPolls from '../components/AllPolls';
import Menu from '../components/Menu';
import Chart from '../components/Chart';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Menu} />
      <Route path="/all-polls" component={AllPolls} />
      <Route path="/chart" component={Chart} />
    </Switch>
  </main>
);
