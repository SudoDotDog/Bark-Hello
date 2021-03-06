/**
 * @author WMXPY
 * @namespace Hello_State
 * @description Declare
 */

export type HelloCell = {

    name: string;
    url: string;
};

export type PanelType = {

    name: string;
    x: number;
    y: number;
    cells: HelloCell[];
};

export type HelloStructure = {

    panels: PanelType[];
};
