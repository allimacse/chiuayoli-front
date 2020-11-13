/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import {
  Login,
  Home,
  NotFound,
} from './pages/index.js';

export default (
  <Switch>
    <Route
      exact
      path="/"
      component={Home}
    />
    <Route
      exact
      path="/login"
      component={Login}
    />
    <Route
      component={NotFound}
    />
  </Switch>
);
