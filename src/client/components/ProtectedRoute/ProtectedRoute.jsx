import React from 'react';
import { Navigate } from 'react-router-dom';


const ProtectedRoute = ({ userAuthenticated, component: Component }) => {
  if (!userAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <Component />;
}

export default ProtectedRoute;
