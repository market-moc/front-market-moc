import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Tabs from './Components/Tabs';
import Transactions from './Components/Transactions';
import TransactionDetails from './Components/Transaction_detail';

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
        <Route path="/list/:id">
          <TransactionDetails />
        </Route>
        <Route path="/">
          <Transactions />
        </Route>
      </Switch>
    </Router>
  );
}
