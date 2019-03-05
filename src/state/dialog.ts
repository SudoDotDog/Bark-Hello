/**
 * @author WMXPY
 * @namespace Hello_Store
 * @description Store
 */

import { FromElement } from "@sudoo/neon/form/structure";
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

    @observable
    public title: string = '';

    @observable
    public structure: Record<string, FromElement> = {};

    @action
    public open(title: string, structure: any, nextFunction: (value: EditDialogResult) => void): void {
        this.title = title;
        this.structure = structure;
        this.current = {};
        this.next = () => {
            this.isOpen = false;
            nextFunction({ ...this.current });
        };

        this.isOpen = true;
    }

    @action
    public close(): void {
        this.isOpen = false;
    }

    @action
    public setValue(newValue: any): void {
        this.current = newValue;
    }
}

export const editDialogStore: EditDialogStore = new EditDialogStore();
