/**
 * @author WMXPY
 * @namespace Hello_Component
 * @description Panel
 */

import { NeonDash } from "@sudoo/neon/dash";
import { NeonPaper } from "@sudoo/neon/paper";
import { NeonTitle } from "@sudoo/neon/typography";
import * as React from "react";
import { panel } from "../../style/components/panel.scss";
import { HelloCell, HelloPanel } from "../state/declare";
import { editDialogStore } from "../state/dialog";
import { Cell } from "./cell";

export type PanelProps = {

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
            <NeonDash
                onClick={() => editDialogStore.open()}>
                +
            </NeonDash>
        </div>
    </NeonPaper>;
};
