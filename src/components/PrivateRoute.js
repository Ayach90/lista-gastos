import React from 'react';
import { useAuth } from './../contexts/AuthContext';
import { Route, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children, ...props }) => {
  const user = useAuth();
  const history = useNavigate();
  if (user) {
    return <Route {...props}>{children}</Route>;
  } else {
    history('/login');
  }
};

export default PrivateRoute;
