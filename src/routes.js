import { Route, IndexRoute } from 'react-router';
import React from 'react';
import HomePage from './components/pages/HomePage';
export default (
    <Route path="/" component={HomePage}>
        <IndexRoute component={HomePage} />
    </Route>
);