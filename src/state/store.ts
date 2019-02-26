/**
 * @author WMXPY
 * @namespace Hello_Store
 * @description Store
 */

import { computed, observable } from "mobx";
import { HelloPanel, HelloStructure } from "./declare";

class Store {

    @observable
    private _structure: HelloStructure = {
        panels: [{
            cells: [
                {
                    name: 'test',
                    url: 'google.com',
                },
                {
                    name: 'test2',
                    url: 'google.com',
                },
            ],
        }, {
            cells: [
                {
                    name: 'test',
                    url: 'google.com',
                },
                {
                    name: 'test2',
                    url: 'google.com',
                },
                {
                    name: 'test',
                    url: 'google.com',
                },
                {
                    name: 'test2',
                    url: 'google.com',
                },
                {
                    name: 'test',
                    url: 'google.com',
                },
                {
                    name: 'test2',
                    url: 'google.com',
                },
                {
                    name: 'test',
                    url: 'google.com',
                },
                {
                    name: 'test2',
                    url: 'google.com',
                },
            ],
        }],
    };

    @computed
    public get panels(): HelloPanel[] {
        return this._structure.panels;
    }
}

export const store: Store = new Store();
