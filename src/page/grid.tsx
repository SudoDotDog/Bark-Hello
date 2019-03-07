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
import { LinkPanel } from "../panel/link";
import { PanelType } from "../state/declare";
import { store } from "../state/store";

export const Grid: React.FC = observer(() => {

    return (
        <React.Fragment>
            <NeonGrid
                width={4}
                className={grid}
            >
                <HelloPanel />
                {store.panels.map((panel: PanelType, index: number) =>

                    <LinkPanel
                        key={index}
                        x={panel.x}
                        y={panel.y}
                        name={panel.name}
                        cells={panel.cells}
                        position={index}
                    />,
                )}
            </NeonGrid>
            {/* <iframe src={`http://localhost:8081/?key=BRONTOSAURUS_RED&cb=IFRAME`} /> */}
        </React.Fragment>
    );
});
