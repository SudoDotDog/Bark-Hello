/**
 * @author WMXPY
 * @namespace Hello_Form
 * @description Add Name
 */

import { NeonGather } from "@sudoo/neon/dialog";
import { observer } from "mobx-react";
import * as React from "react";
import { editDialogStore } from "../state/dialog";

export const GatherAddName: React.FC<{}> = observer(() => {

    // window.addEventListener('message', (event: MessageEvent) => console.log(event.data));

    return <NeonGather
        buttons={[{
            text: 'Submit',
            onClick: editDialogStore.next,
        }]}
        structure={editDialogStore.structure}
        onChange={(newValue) => editDialogStore.setValue(newValue)}
        value={editDialogStore.current}
        title={editDialogStore.title}
        onEnter={editDialogStore.next}
        blur
        show={editDialogStore.isOpen}
        onClose={() => editDialogStore.close()}
    />;
});
