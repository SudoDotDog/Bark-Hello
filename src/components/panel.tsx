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
import { Cell } from "./cell";

export type PanelProps = {

    readonly panel: HelloPanel;
};

export const Panel: React.FC<PanelProps> = (props: PanelProps) => {

    return <NeonPaper>
        <NeonTitle>Hello</NeonTitle>
        <div className={panel}>
            {props.panel.cells.map((cell: HelloCell) =>
                <Cell cell={cell}></Cell>,
            )}
        </div>
    </NeonPaper>;
};
