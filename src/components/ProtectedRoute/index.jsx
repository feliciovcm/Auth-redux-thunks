import React from 'react';
import { useSelector } from 'react-redux';
import { Route, useLocation, Redirect } from 'react-router';


export function ProtectedRoute({ path, exact, component }) {
  
  const location = useLocation();

  const user = useSelector(state => state.authetication.user);

  if (!user) {
    return (
      <Redirect to={{
        pathname: "/login",
        state: { from: location }
      }} />
    )
  }

  return (
    <Route path={path} exact={exact} component={component} />
  );
}
