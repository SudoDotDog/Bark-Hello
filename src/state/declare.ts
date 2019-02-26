/**
 * @author WMXPY
 * @namespace Hello_State
 * @description Declare
 */

export type HelloCell = {

    name: string;
    url: string;
};

export type HelloPanel = {

    cells: HelloCell[];
};

export type HelloStructure = {

    panels: HelloPanel[];
};
