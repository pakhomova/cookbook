import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes.json';
import RecepiesContainer from './containers/Recepies';

export default () => (
  <Switch>
    <Route exact path={routes.HOME} component={RecepiesContainer} />
    <Route path={routes.ADD} component={() => (<div />)} />
    <Route path={routes.EDIT + '/:id'} component={() => (<div />)} />
    <Route path={routes.VERSIONS + '/:id'} component={() => (<div />)} />
  </Switch>
);