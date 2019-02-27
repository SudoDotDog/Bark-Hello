/**
 * @author WMXPY
 * @namespace Hello_Store
 * @description Store
 */

import { action, observable } from "mobx";

export type EditDialogResult = {
    readonly name?: string;
    readonly url?: string;
};

class EditDialogStore {

    @observable
    public isOpen: boolean = false;

    @observable
    public next: any = null;

    @observable
    public current: EditDialogResult = {};

    @action
    public open(nextFunction: (value: EditDialogResult) => void): void {
        this.current = {};
        this.next = () => {
            this.isOpen = false;
            nextFunction({ ...this.current });
        };

        this.isOpen = true;
    }

    @action
    public setValue(newValue: any): void {
        this.current = newValue;
    }
}

export const editDialogStore: EditDialogStore = new EditDialogStore();
