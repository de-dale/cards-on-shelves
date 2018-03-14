'use strict';

import {CardTitle} from "./CardTitle";
import {CardField} from "./CardField";
import {CardText} from "./CardText";

export const CardItemTypes = Object.freeze({
    title: {
        view: CardTitle
    },
    text: {
        view: CardText
    },
    field: {
        view: CardField
    }
});
