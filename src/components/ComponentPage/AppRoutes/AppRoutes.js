import React, { Suspense } from 'react';
import { Switch } from 'react-router-dom';

import PageLoader from '../PageLoader/Pageloader.js';
import PrivateRoute from '../PrivateRoute/PrivateRoute.js';

import PublicRoute from '../PrivateRoute/PublicRoute';

const AppRoutes = ({ routes }) => {
  const items = routes.map((route, idx) => {
    // console.log(route);
    return route.private ? (
      <PrivateRoute key={idx} {...route} />
    ) : (
      <PublicRoute key={idx} {...route} />
    );
  });

  return (
    <div class="conteiner">
      <Suspense fallback={<PageLoader />}>
        <Switch>{items}</Switch>
      </Suspense>
    </div>
  );
};

export default AppRoutes;
