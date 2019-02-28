/**
 * @author WMXPY
 * @namespace Hello_Component
 * @description New Cell
 */

import { NeonDash } from "@sudoo/neon/dash";
import * as React from "react";
import { cell } from "../../style/components/cell.scss";
import { EditDialogResult, editDialogStore } from "../state/dialog";

export type CellNewProps = {

    onAdd: (value: EditDialogResult) => void;
};

export const CellNew: React.FC<CellNewProps> = (props: CellNewProps) => {

    return (<NeonDash
        className={cell}
        onClick={() => editDialogStore.open(props.onAdd)}>
        +
    </NeonDash>);
};
