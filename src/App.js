import { Route, Switch } from 'react-router-dom';
import Main from './page/Main';
import User from './page/User';

function App() {
  return (
    <Switch>
      <Route path="/user/:login" component={ User } />
      <Route exact path="/" component={ Main } />
    </Switch>
  );
}

export default App;
