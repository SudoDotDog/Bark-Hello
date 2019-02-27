/**
 * @author WMXPY
 * @namespace Hello_Store
 * @description Store
 */

import { action, observable } from "mobx";

class EditDialogStore {

    @observable
    public isOpen: boolean = false;

    @observable
    public current: any = {};

    @action
    public open(): void {
        this.isOpen = true;
    }
}

export const editDialogStore: EditDialogStore = new EditDialogStore();
