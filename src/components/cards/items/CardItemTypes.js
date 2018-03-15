'use strict';

import {CardTitle} from "./CardTitle";
import {CardTitleInput} from "./CardTitleInput";
import {CardField} from "./CardField";
import {CardFieldInput} from "./CardFieldInput";
import {CardText} from "./CardText";
import {CardTextInput} from "./CardTextInput";

const _CardItemTypes = {

    title: {
        label: "Titre",
        input: CardTitleInput,
        view: CardTitle
    },
    text: {
        label: "Texte long",
        input: CardTextInput,
        view: CardText
    },
    field: {
        label: "Clé/Valeur",
        input: CardFieldInput,
        view: CardField
    }
};

Object.defineProperty(_CardItemTypes, 'values', {
    writable: false,
    value: (mapEach) => Object.entries(_CardItemTypes).map(([name, value]) => {
        return mapEach(name, value);
    })
});

export const CardItemTypes = Object.freeze(_CardItemTypes);
