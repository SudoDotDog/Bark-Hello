/**
 * @author WMXPY
 * @namespace Hello
 * @description Entry
 */

import { MARGIN, SIZE } from "@sudoo/neon/declare";
import { NeonFloat } from "@sudoo/neon/float";
import { INPUT_TYPE } from "@sudoo/neon/input/declare";
import * as React from "react";
import { Redirect, Route } from "react-router-dom";
import { GatherAddName } from "./form/add-name";
import { Grid } from "./page/grid";
import { editDialogStore } from "./state/dialog";
import { store } from "./state/store";

export class Entry extends React.Component {

    public render(): JSX.Element {

        return (
            <React.Fragment>
                <Route path="/" exact render={() => <Redirect to="/grid" />} />
                <Route path="/grid" component={Grid} />
                <GatherAddName />
                <NeonFloat
                    margin={MARGIN.MEDIUM}
                    size={SIZE.MEDIUM}
                    onClick={() => editDialogStore.open("Add Panel", {
                        name: {
                            autofocus: true,
                            display: 'Name',
                            type: INPUT_TYPE.TEXT,
                        },
                    }, (value) => store.addPanel(value.name as any))}
                    round
                >+</NeonFloat>
            </React.Fragment>
        );
    }
}

export default Entry;
