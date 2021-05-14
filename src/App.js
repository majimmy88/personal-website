import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';
import Onboarding from './pages/Onboarding';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/work/onboarding">
            <Onboarding />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
