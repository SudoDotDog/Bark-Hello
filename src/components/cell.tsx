/**
 * @author WMXPY
 * @namespace Hello_Component
 * @description Cell
 */

import { NeonCard } from "@sudoo/neon/card";
import { SIZE } from "@sudoo/neon/declare";
import * as React from 'react';
import { cell } from "../../style/components/cell.scss";
import { HelloCell } from '../state/declare';

export type CellProps = {

    readonly cell: HelloCell;
};

export const Cell: React.FC<CellProps> = (props: CellProps) => {

    return <NeonCard
        size={SIZE.NORMAL}
        className={cell}
    >
        {props.cell.name}
    </NeonCard>;
};
