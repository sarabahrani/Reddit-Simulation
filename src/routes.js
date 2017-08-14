import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './app';
export default (
    <Route path="/" component={App}>
        <IndexRoute component={App} />
    </Route>
);