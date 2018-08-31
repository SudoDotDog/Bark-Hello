/**
 * @author WMXPY
 * @fileoverview Development build entry
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Hello from './root/root';

declare const module: any;
declare const require: any;

const render: (App: any) => void = (App: any) => {
    ReactDOM.render(
        <AppContainer>
            <App />
        </AppContainer>,
        document.getElementById('container'));
};

render(Hello);
if (module.hot) {
    module.hot.accept('./root/root', () => {
        render(require('./root/root').default);
    });
}
