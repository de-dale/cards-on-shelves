import CardTitle from '../title/CardTitle';
import CardField from '../field/CardField';
import CardText from '../text/CardText';

const _CardItemTypes = {

    title: {
        label: 'Titre',
        style: 'card-title',
        view: CardTitle
    },
    text: {
        label: 'Texte long',
        style: 'card-text',
        view: CardText
    },
    field: {
        label: 'Clé/Valeur',
        style: 'card-field-container',
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
export default CardItemTypes;