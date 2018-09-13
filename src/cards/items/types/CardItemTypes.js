import CardTitle from '../title/CardTitle';
import CardField from '../field/CardField';
import CardText from '../text/CardText';

const _CardItemTypes = {

    title: {
        label: 'Titre',
        view: CardTitle
    },
    text: {
        label: 'Texte long',
        view: CardText
    },
    field: {
        label: 'Clé/Valeur',
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