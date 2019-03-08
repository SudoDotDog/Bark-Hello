/**
 * @author WMXPY
 * @namespace Hello_Component
 * @description Panel
 */

import { NeonGridElement } from "@sudoo/neon/grid";
import { NeonPaper } from "@sudoo/neon/paper";
import { NeonTitle } from "@sudoo/neon/typography";
import * as React from "react";
import { paper } from "../../style/components/panel.scss";

export type PanelProps = {

    readonly x?: number;
    readonly y?: number;
    readonly width?: number;
    readonly height?: number;

    readonly title?: string;
    readonly children?: React.ReactNode;
};

export const Panel: React.FC<PanelProps> = (props: PanelProps) => {

    return (<NeonGridElement
        x={props.x}
        y={props.y}
        width={props.width}
        height={props.height}
    >
        <NeonPaper className={paper}>
            <NeonTitle
                removeBorder
            >
                {props.title}
            </NeonTitle>
            {props.children}
        </NeonPaper>
    </NeonGridElement>);
};
