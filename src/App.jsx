import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import { useSelector } from 'react-redux';
import Login from './pages/Login';
import Cart from './pages/Cart';

function App() {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Switch>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route exact path="/">
          {user ? <Home /> : <Redirect to="/login" />}
        </Route>
        <Route path="/products/:category">
          {user ? <ProductList /> : <Redirect to="/login" />}
        </Route>
        <Route path="/product/:id">
          {user ? <Product /> : <Redirect to="/login" />}
        </Route>
        <Route path="/cart">{user ? <Cart /> : <Redirect to="/login" />}</Route>
      </Switch>
    </Router>
  );
}

export default App;
