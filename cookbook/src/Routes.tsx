import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes.json';
import RecipesContainer from './containers/Recipes';
import VersionsContainer from './containers/Versions';
import EditContainer from './containers/Edit';

export default () => (
  <Switch>
    <Route exact path={routes.HOME} component={RecipesContainer} />
    <Route path={routes.ADD} component={EditContainer} />
    <Route path={routes.EDIT + '/:id'} component={EditContainer} />
    <Route path={routes.VERSIONS + '/:id'} component={VersionsContainer} />
  </Switch>
);