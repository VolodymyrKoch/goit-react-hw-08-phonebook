import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';

import PageLoader from '../PageLoader/Pageloader.js';
// import ErrorBoundry from "../../shared/components/ErrorBoundry";
import PrivateRoute from '../PrivateRoute/PrivateRoute.js';

import PublicRoute from '../PrivateRoute/PublicRoute';

const AppRoutes = ({ routes }) => {
  const items = routes.map(route => {
    return route.private ? (
      <PrivateRoute key={route.path} {...route} />
    ) : (
      <PublicRoute key={route.path} {...route} />
    );
  });

  return (
    // <ErrorBoundry>
    <Suspense fallback={<PageLoader />}>
      <Switch>{items}</Switch>
    </Suspense>
    // </ErrorBoundry>
  );
};

export default AppRoutes;
