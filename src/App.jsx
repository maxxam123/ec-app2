import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
