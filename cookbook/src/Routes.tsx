import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes.json';
import RecepiesContainer from './containers/Recepies';
import VersionsContainer from './containers/Versions';
import EditContainer from './containers/Edit';

export default () => (
  <Switch>
    <Route exact path={routes.HOME} component={RecepiesContainer} />
    <Route path={routes.ADD} component={EditContainer} />
    <Route path={routes.EDIT + '/:id'} component={EditContainer} />
    <Route path={routes.VERSIONS + '/:id'} component={VersionsContainer} />
  </Switch>
);