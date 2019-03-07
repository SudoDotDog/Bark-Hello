/**
 * @author WMXPY
 * @namespace Hello_Page
 * @description Grid
 */

import { NeonGrid } from "@sudoo/neon/grid";
import { observer } from "mobx-react";
import * as React from "react";
import { grid } from "../../style/page/grid.scss";
import { HelloPanel } from "../panel/hello";

export const Grid: React.FC = observer(() => {

    return (
        <React.Fragment>
            <NeonGrid
                width={3}
                className={grid}
            >
                <HelloPanel />
                {/* {store.panels.map((panel: HelloPanel, index: number) =>

                    <Panel
                        key={index}
                        panel={panel}
                        position={index}
                    />,
                )} */}
            </NeonGrid>
            {/* <iframe src={`http://localhost:8081/?key=BRONTOSAURUS_RED&cb=IFRAME`} /> */}
        </React.Fragment>
    );
});
