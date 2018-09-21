import React from 'react';
import PropTypes from 'prop-types';

import CardItemEditor from './editor/CardItemEditor';
import CardItemTypes from './types/CardItemTypes';

export const CardItem = ({ card, item, updateCardItem, removeCardItem }) => {
    const ItemHandler = CardItemTypes[item.type] && CardItemTypes[item.type].view || DefaultCardItem;
    return (
        <div className={'card-item-foo'}
            tabIndex={-1}
            onFocus={() => updateCardItem(card, item, 'editing', true)}
            onBlur={whenBlurs(() => updateCardItem(card, item, 'editing', false))}>
            <ItemHandler
                item={item}
                updateItemField={(field, value) => updateCardItem(card, item, field, value)}/>
            {item.editing &&
            <CardItemEditor
                card={card}
                item={item}
                updateItemField={(field, value) => updateCardItem(card, item, field, value)}
                removeCardItem={() => removeCardItem(card, item)}/>
            }
        </div>
    );
};

const whenBlurs = (fn) => {
    return (e) => {
        if (doesEventBlurs(e)) fn();
    };
};

const doesEventBlurs = ({ currentTarget, relatedTarget }) => {
    return !currentTarget.contains(relatedTarget);
};

const DefaultCardItem = () => {
    return 'Empty';
};

CardItem.propTypes = {
    card: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
    updateCardItem: PropTypes.func.isRequired,
    removeCardItem: PropTypes.func.isRequired
};

export default CardItem;