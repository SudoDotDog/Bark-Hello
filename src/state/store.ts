/**
 * @author WMXPY
 * @namespace Hello_Store
 * @description Store
 */

import { action, computed, observable } from "mobx";
import { HelloPanel, HelloStructure } from "./declare";
import { EditDialogResult } from "./dialog";

class Store {

    @observable
    private _structure: HelloStructure = {
        panels: [{
            cells: [],
        }, {
            cells: [],
        }],
    };

    @computed
    public get panels(): HelloPanel[] {
        return this._structure.panels;
    }

    @action
    public addCell(panel: number, result: EditDialogResult) {
        console.log(panel, result);
        this._structure.panels[panel] = {
            ...this._structure.panels[panel],
            cells: [
                ...this._structure.panels[panel].cells,
                {
                    name: '',
                    url: '',
                    ...result,
                },
            ],
        };
    }
}

export const store: Store = new Store();
