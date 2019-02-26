/**
 * @author WMXPY
 * @namespace Hello_Component
 * @description Panel
 */

import * as React from 'react';
import { HelloCell, HelloPanel } from '../state/declare';
import { Cell } from './cell';

export type PanelProps = {

    readonly panel: HelloPanel;
};

export const Panel: React.FC<PanelProps> = (props: PanelProps) => {

    return <div>
        {props.panel.cells.map((cell: HelloCell) =>
            <Cell cell={cell}></Cell>,
        )}
    </div>;
};
