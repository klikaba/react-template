import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PublicRoute({ component: Component, userAuthenticated, ...rest }) {
  const renderComponent = props => (
    !userAuthenticated
      ? <Component {...props} />
      : <Redirect to={{ pathname: location.pathname }} />
  );

  // if (userAuthenticated) {
  //   return <Redirect to={{ pathname: location.pathname }} />;
  // }

  return (
    <Route
      {...rest}
      render={props => renderComponent(props)}
    />
  );
}

export default PublicRoute;
