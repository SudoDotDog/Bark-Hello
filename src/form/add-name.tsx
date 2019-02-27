/**
 * @author WMXPY
 * @namespace Hello_Form
 * @description Add Name
 */

import { NeonGather } from "@sudoo/neon/dialog";
import { INPUT_TYPE } from "@sudoo/neon/input/declare";
import { observer } from "mobx-react";
import * as React from "react";
import { editDialogStore } from "../state/dialog";

export const GatherAddName: React.FC<{}> = observer(() => {

    return <NeonGather
        buttons={[{
            text: 'Submit',
            onClick: editDialogStore.next,
        }]}
        form={{
            structure: {
                name: {
                    autofocus: true,
                    display: 'Name',
                    type: INPUT_TYPE.TEXT,
                },
                url: {
                    display: 'Link',
                    type: INPUT_TYPE.TEXT,
                },
            },
            onChange: (newValue) => editDialogStore.setValue(newValue),
            value: editDialogStore.current,
        }}
        title="Add link"
        blur
        show={editDialogStore.isOpen}
    />;
});
