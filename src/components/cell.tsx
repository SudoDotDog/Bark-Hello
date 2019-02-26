/**
 * @author WMXPY
 * @namespace Hello_Component
 * @description Cell
 */

import * as React from 'react';
import { HelloCell } from '../state/declare';

export type CellProps = {

    readonly cell: HelloCell;
};

export const Cell: React.FC<CellProps> = (props: CellProps) => {

    return <div></div>;
};
