/**
 * @author WMXPY
 * @namespace Hello_Panel
 * @description Hello
 */

import { INPUT_TYPE } from "@sudoo/neon/input/declare";
import * as React from "react";
import { Panel } from "../components/panel";
import { editDialogStore } from "../state/dialog";
import { store } from "../state/store";

export type PanelProps = {

    readonly x?: number;
    readonly y?: number;
    readonly width?: number;
    readonly height?: number;
};

export const HelloPanel: React.FC<PanelProps> = (props: PanelProps) => {

    return (<Panel
        x={1}
        width={1}
        title="Hello"
    >
        <button onClick={() => editDialogStore.open("Add Panel", {
            name: {
                autofocus: true,
                display: 'Name',
                type: INPUT_TYPE.TEXT,
            },
        }, (value) => store.addPanel(value.name as any))}>Add Panel</button>
    </Panel>);
};
