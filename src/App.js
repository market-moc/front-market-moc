import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Tabs from './Components/Tabs';
import Transactions from './Components/Transactions';
import TransactionDetails from './Components/Transaction_detail';
import Ventes from './Components/Buys';
import VenteDetail from './Components/Buy_detail';
import Sell from './Components/Sell';

export default function App() {
  return (
    <Router>
      <Tabs />
      <Switch>
        <Route exact path="/buy">
          <Ventes />
        </Route>
        <Route path="/sell">
          <Sell />
        </Route>
        <Route path="/transaction/:id">
          <TransactionDetails />
        </Route>
        <Route path="/buy/:id">
          <VenteDetail />
        </Route>
        <Route path="/">
          <Transactions />
        </Route>
      </Switch>
    </Router>
  );
}
