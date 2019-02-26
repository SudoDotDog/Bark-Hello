/**
 * @author WMXPY
 * @namespace Portal
 * @description Index
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { HashRouter } from "react-router-dom";
import '../style/common/global.sass';
import Entry from "./entry";

declare const module: any;

const render: (App: any) => void = (App: any): void => {

    ReactDOM.render(
        (<AppContainer>
            <HashRouter>
                <App />
            </HashRouter>
        </AppContainer>),
        document.getElementById("container"));
};

render(Entry);
if (module.hot) {

    module.hot.accept("./entry", () => {
        render(require("./entry").default);
    });
}
