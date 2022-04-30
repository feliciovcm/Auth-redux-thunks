import React from 'react'
import { Router, Switch, Route, Redirect } from 'react-router';
import { ProtectedRoute } from './components/ProtectedRoute';
import { history } from './helpers/history';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <ProtectedRoute path='/' exact component={HomePage} />
        <Route path='/login' component ={LoginPage} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}
