/**
 * @author WMXPY
 * @namespace Hello_Panel
 * @description Hello
 */

import { SIZE } from "@sudoo/neon/declare";
import { INPUT_TYPE } from "@sudoo/neon/input/declare";
import { NeonTextField } from "@sudoo/neon/text";
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
            x: INPUT_TYPE.NUMBER,
            y: INPUT_TYPE.NUMBER,
            name: {
                autofocus: true,
                display: 'Name',
                type: INPUT_TYPE.TEXT,
            },
        }, (value: any) => store.addPanel(value.name, value.x, value.y))}>Add Panel</button>
        <NeonTextField
            label="Global Edit"
            size={SIZE.RELATIVE}
            value={JSON.stringify(store.panels)}
        />
    </Panel>);
};
