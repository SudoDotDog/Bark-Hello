/**
 * @author WMXPY
 * @namespace Hello_Page
 * @description Grid
 */

import { observer } from "mobx-react";
import * as React from "react";
import { grid } from "../../style/page/grid.scss";
import { Panel } from "../components/panel";
import { HelloPanel } from "../state/declare";
import { store } from "../state/store";

export const Grid: React.FC<{}> = observer(() => {

    return <div className={grid}>
        {store.panels.map((panel: HelloPanel) =>

            <Panel panel={panel}></Panel>,
        )}
    </div>;
});
