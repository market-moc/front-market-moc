import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Tabs from './Components/Tabs';
import Transactions from './Components/Transactions';

export default function App() {
  return (
    <Router>
      <Tabs />
      <Switch>
        <Route path="/buy">
          <Transactions />
        </Route>
        <Route path="/sell">
          <Transactions />
        </Route>
        <Route path="/">
          <Transactions />
        </Route>
      </Switch>
    </Router>
  );
}
