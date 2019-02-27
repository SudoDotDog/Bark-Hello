/**
 * @author WMXPY
 * @namespace Hello_Page
 * @description Grid
 */

import { NeonGather } from "@sudoo/neon/dialog";
import { INPUT_TYPE } from "@sudoo/neon/input/declare";
import { observer } from "mobx-react";
import * as React from "react";
import { grid } from "../../style/page/grid.scss";
import { Panel } from "../components/panel";
import { HelloPanel } from "../state/declare";
import { editDialogStore } from "../state/dialog";
import { store } from "../state/store";

export const Grid: React.FC<{}> = observer(() => {

    return <div className={grid}>
        {store.panels.map((panel: HelloPanel, index: number) =>

            <Panel
                key={index}
                panel={panel}
            />,
        )}
        <NeonGather
            form={{
                structure: {
                    name: {
                        autofocus: true,
                        display: 'Name',
                        type: INPUT_TYPE.TEXT,
                    },
                    link: {
                        display: 'Link',
                        type: INPUT_TYPE.TEXT,
                    },
                },
                value: editDialogStore.current,
            }}
            title="Add link"
            blur
            show={editDialogStore.isOpen}
        />
    </div>;
});
