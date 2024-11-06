// PrivateRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { SolutionContext } from '../context/SolutionContext';

const PrivateRoute = ({ children }) => {
  const { loggedIn } = useContext(SolutionContext);

  return loggedIn ? children : <Navigate to="/auth" />;
};

export default PrivateRoute;
