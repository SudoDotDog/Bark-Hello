/**
 * @author WMXPY
 * @namespace Hello_Page
 * @description Nav
 */

import { NeonPeek } from "@sudoo/neon/button";
import { MARGIN } from "@sudoo/neon/declare";
import { observer } from "mobx-react";
import * as React from "react";

export const Nav: React.FC = observer(() => {

    return (
        <div>
            <NeonPeek margin={MARGIN.TINY}>
                +
            </NeonPeek>
        </div>
    );
});
