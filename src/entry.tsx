/**
 * @author WMXPY
 * @namespace Hello
 * @description Entry
 */

import * as React from "react";
import { Redirect, Route } from "react-router-dom";
import { GatherAddName } from "./form/add-name";
import { Grid } from "./page/grid";

export class Entry extends React.Component {

    public render(): JSX.Element {

        return (
            <React.Fragment>
                <Route path="/" exact render={() => <Redirect to="/grid" />} />
                <Route path="/grid" component={Grid} />
                <GatherAddName />
            </React.Fragment>
        );
    }
}

export default Entry;
