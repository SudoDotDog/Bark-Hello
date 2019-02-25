/**
 * @author WMXPY
 * @namespace Hello
 * @description Store
 */

import { SudooRedux } from '@sudoo/redux';
import { ACTIONS, Store } from './declare';

export const HelloStore: Store = {
};

export const redux: SudooRedux<Store, ACTIONS> =
    SudooRedux.create<Store, ACTIONS>(HelloStore);
