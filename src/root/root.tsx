/**
 * @author WMXPY
 * @fileoverview Project root
 */

import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Index } from '../page/index';
import '../style/global.sass';

export interface IProps extends RouteComponentProps<any> {
    route: any;
}

class AppRoot extends React.Component<IProps, {}> {
    public render(): JSX.Element {
        return <Index></Index>;
    }
}

export default AppRoot;
