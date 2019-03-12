/**
 * @author WMXPY
 * @namespace Hello_Panel
 * @description Hello
 */

import { NeonButton } from "@sudoo/neon/button";
import { WIDTH } from "@sudoo/neon/declare";
import { INPUT_TYPE } from "@sudoo/neon/input/declare";
import * as React from "react";
import { Panel } from "../components/panel";
import { editDialogStore } from "../state/dialog";
import { globalEditDialogStore } from "../state/global-edit-store";
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
        <NeonButton
            width={WIDTH.FULL}
            onClick={() => editDialogStore.open("Add Panel", {
                x: INPUT_TYPE.NUMBER,
                y: INPUT_TYPE.NUMBER,
                name: {
                    autofocus: true,
                    display: 'Name',
                    type: INPUT_TYPE.TEXT,
                },
            }, (value: any) => store.addPanel(value.name, value.x, value.y))}>
            Add Panel
        </NeonButton>
        <NeonButton
            width={WIDTH.FULL}
            onClick={() => globalEditDialogStore.open()}>
            Global Edit
        </NeonButton>
    </Panel>);
};
