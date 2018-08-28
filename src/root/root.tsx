/**
 * @author WMXPY
 * @fileoverview Project root
 */

import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { renderRoutes } from 'react-router-config';

import '../style/global.sass';

export interface IProps extends RouteComponentProps<any> {
    route: any;
}

class AppRoot extends React.Component<IProps, {}> {
    public render(): JSX.Element {
        return renderRoutes(this.props.route.routes);
    }
}

export default AppRoot;
