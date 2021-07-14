import React, { ReactElement } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';

export const App = (): ReactElement => {
    const { path } = useRouteMatch();

    return (
        <>
            <Switch>
                <Route
                    exact
                    path={path}
                    render={(): ReactElement => <HomePage />}
                />
            </Switch>
        </>
    );
};