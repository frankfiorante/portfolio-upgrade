/* eslint-disable @typescript-eslint/no-explicit-any, import/no-extraneous-dependencies */
import { createBrowserHistory } from 'history';

let history: any;
if (typeof document !== 'undefined') {
    history = createBrowserHistory();
}

export { history };