/**
 * @author WMXPY
 * @namespace Hello_Component
 * @description Cell
 */

import * as React from 'react';
import { cell } from "../../style/components/cell.scss";
import { HelloCell } from '../state/declare';

export type CellProps = {

    readonly cell: HelloCell;
};

const parseUrl = (url: string): string => {

    if (url.substring(0, 4) !== 'http') {
        return 'http://' + url;
    }
    return url;
};

export const Cell: React.FC<CellProps> = (props: CellProps) => {

    const name: string = props.cell.name;
    const url: string = parseUrl(props.cell.url);

    return (<button
        onClick={() => window.location.href = url}
        className={cell}>
        <div>
            <img
                src={"https://plus.google.com/_/favicon?domain=" + url}
                alt={url} />
        </div>
        <div>{name}</div>
    </button>);
};
