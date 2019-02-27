/**
 * @author WMXPY
 * @namespace Hello_Component
 * @description Panel
 */

import { NeonPaper } from "@sudoo/neon/paper";
import { NeonTitle } from "@sudoo/neon/typography";
import * as React from "react";
import { panel } from "../../style/components/panel.scss";
import { HelloCell, HelloPanel } from "../state/declare";
import { EditDialogResult } from "../state/dialog";
import { store } from "../state/store";
import { Cell } from "./cell";
import { CellNew } from "./cell-new";

export type PanelProps = {

    readonly position: number;
    readonly panel: HelloPanel;
};

export const Panel: React.FC<PanelProps> = (props: PanelProps) => {

    return <NeonPaper>
        <NeonTitle
            removeBorder
        >
            Hello
        </NeonTitle>
        <div className={panel}>
            {props.panel.cells.map((cell: HelloCell, index: number) =>
                <Cell
                    key={index}
                    cell={cell}
                />,
            )}
            <CellNew
                onAdd={(value: EditDialogResult) => store.addCell(props.position, value)}
            />
        </div>
    </NeonPaper>;
};
