/**
 * @author WMXPY
 * @namespace Hello_Form
 * @description Global Edit
 */

import { SIZE } from "@sudoo/neon/declare";
import { NeonDialog } from "@sudoo/neon/dialog";
import { NeonTextField } from "@sudoo/neon/text";
import { observer } from "mobx-react";
import * as React from "react";
import { globalEditDialogStore } from "../state/global-edit-store";
import { store } from "../state/store";

export const GlobalEdit: React.FC<{}> = observer(() => {

    return <NeonDialog
        title="Global Edit"
        blur
        show={globalEditDialogStore.isOpen}
        onClose={() => globalEditDialogStore.close()}
    >
        <NeonTextField
            label="Global Edit"
            size={SIZE.RELATIVE}
            value={JSON.stringify(store.panels, null, 2)}
        />
    </NeonDialog>;
});
