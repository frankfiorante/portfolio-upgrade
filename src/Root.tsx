import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';
import { App } from './App';
import { Footer } from './components/Footer/Footer';

export const Root = (): ReactElement => {
    return (
        <>
            <main>
                <Switch>
                    <Route
                        path='/'
                        render={(): ReactElement => <App />}
                    />
                </Switch>
            </main>
            <Footer />
        </>
    );
};