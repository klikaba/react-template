import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ component: Component, userAuthenticated, ...rest }) {
  const renderComponent = props => (
    userAuthenticated
      ? <Component {...props} />
      : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  );

  return (
    <Route
      {...rest}
      render={props => renderComponent(props)}
    />
  );
}

export default ProtectedRoute;
