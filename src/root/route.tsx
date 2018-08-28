/**
 * @author WMXPY
 * @fileoverview Route configs
 */

import * as React from 'react';
import { RouteConfig } from 'react-router-config';
import * as Pages from '../page/import';
import Root from './root';

const Route = (props: any): RouteConfig[] => {
    const routes: RouteConfig[] = [
        {
            component: Root,
            routes: [
                {
                    component: Pages.index,
                    exact: true,
                    path: '/',
                }, 
                {
                    component: () => <div>404</div>,
                    path: '*',
                },
            ],
        },
    ];
    return routes;
};

export default Route;
