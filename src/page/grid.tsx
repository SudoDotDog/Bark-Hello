/**
 * @author WMXPY
 * @namespace Hello_Page
 * @description Grid
 */

import { observer } from "mobx-react";
import * as React from "react";
import { grid } from "../../style/page/grid.scss";
import { Panel } from "../components/panel";
import { GatherAddName } from "../form/add-name";
import { HelloPanel } from "../state/declare";
import { store } from "../state/store";

export const Grid: React.FC = observer(() => {

    return (
        <React.Fragment>
            <div className={grid}>
                {store.panels.map((panel: HelloPanel, index: number) =>

                    <Panel
                        key={index}
                        panel={panel}
                        position={index}
                    />,
                )}
            </div>
            <GatherAddName />
        </React.Fragment>
    );
});
