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
        panels: [],
    };

    @computed
    public get panels(): HelloPanel[] {
        return this._structure.panels;
    }
}

export const store: Store = new Store();
