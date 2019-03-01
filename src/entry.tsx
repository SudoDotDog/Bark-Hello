/**
 * @author WMXPY
 * @namespace Hello
 * @description Entry
 */

import * as React from "react";
import { Redirect, Route } from "react-router-dom";
import * as entryStyle from "../style/entry.scss";
import { GatherAddName } from "./form/add-name";
import { Grid } from "./page/grid";
import { Nav } from "./page/nav";

export class Entry extends React.Component {

    public render(): JSX.Element {

        return (
            <div className={entryStyle.entry}>
                <Route path="/" exact render={() => <Redirect to="/grid" />} />
                <GatherAddName />
                <div className={entryStyle.content}>
                    <Route path="/grid" component={Grid} />
                </div>
                <div className={entryStyle.nav}>
                    <Nav />
                </div>
            </div>
        );
    }
}

export default Entry;
