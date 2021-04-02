import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home/Home';
import Admin from './component/Admin/Admin';
import Deals from './component/Deals/Deals';
import Login from './component/Login/Login';
import Orders from './component/Orders/Orders';
import Header from './component/Header/Header';
import AddJersey from './component/AddJersey/AddJersey';
import { createContext, useState } from 'react';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import AddProduct from './component/AddProduct/AddProduct';
import Manage from './component/Manage/Manage';
import CheckOut from './component/CheckOut/CheckOut';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <Route path="/deals">
            <Deals />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>
          <PrivateRoute path="/addJersey">
            <AddJersey />
          </PrivateRoute>
          <PrivateRoute path="/addProduct">
            <AddProduct/>
          </PrivateRoute>
          <PrivateRoute path="/manage">
            <Manage/>
          </PrivateRoute>
          <PrivateRoute path="/checkout/:id">
            <CheckOut/>
          </PrivateRoute>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
