/**
 * @author WMXPY
 * @namespace Hello_Panel
 * @description Hello
 */

import * as React from "react";
import { cells } from "../../style/components/panel.scss";
import { Cell } from "../components/cell";
import { CellNew } from "../components/cell-new";
import { Panel } from "../components/panel";
import { HelloCell } from "../state/declare";
import { EditDialogResult } from "../state/dialog";
import { store } from "../state/store";

export type LinkPanelProps = {

    readonly x?: number;
    readonly y?: number;
    readonly width?: number;
    readonly name?: string;

    readonly position: number;
    readonly cells: HelloCell[];
};

export const LinkPanel: React.FC<LinkPanelProps> = (props: LinkPanelProps) => {

    return (<Panel
        x={props.x}
        y={props.y}
        width={2}
        title={props.name}
    >
        <div className={cells}>
            {props.cells.map((cell: HelloCell, index: number) =>
                <Cell
                    key={index}
                    cell={cell}
                />,
            )}
            <CellNew
                onAdd={(value: EditDialogResult) => store.addCell(props.position, value)}
            />
        </div>
    </Panel>);
};
