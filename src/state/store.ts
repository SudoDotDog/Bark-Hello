/**
 * @author WMXPY
 * @namespace Hello_Store
 * @description Store
 */

import { action, computed, observable } from "mobx";
import { HelloStructure, PanelType } from "./declare";
import { EditDialogResult } from "./dialog";

class Store {

    @observable
    private _structure: HelloStructure = this._read();

    @computed
    public get panels(): PanelType[] {
        return this._structure.panels;
    }

    @action
    public addCell(panel: number, result: EditDialogResult) {

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

        this._save();
    }

    @action
    public addPanel(name: string, x: number, y: number) {

        this._structure.panels = [
            ...this._structure.panels,
            {
                name,
                x,
                y,
                cells: [],
            },
        ];

        this._save();
    }

    private _save() {

        const json: string = JSON.stringify(this._structure);
        localStorage.setItem('hello', json);
    }

    private _read(): HelloStructure {

        const json: string | null = localStorage.getItem('hello');

        if (!json) {

            return {
                panels: [],
            };
        }
        const parsed: any = JSON.parse(json);
        return parsed;
    }
}

export const store: Store = new Store();
