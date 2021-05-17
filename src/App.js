import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
// import Work from './pages/Work';
import Onboarding from './pages/Onboarding';
import Profiles from './pages/Profiles';

const App = () => {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route exact path="/work/onboarding">
            <Onboarding />
          </Route>
          <Route exact path="/work/profiles">
            <Profiles />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
