import React from 'react';
import PropTypes from 'prop-types';

import CardItemToolbar from './toolbar/CardItemToolbar';
import CardItemTypes from './types/CardItemTypes';
import classNames from 'classnames';

export const CardItem = ({ card, item, updateCardItem, removeCardItem }) => {
    const ItemHandler = CardItemTypes[ item.type ] || DefaultCardItemHandler;
    const itemContainerClasses = classNames('card-item', ItemHandler.style);
    return (
        <div className={itemContainerClasses}
            tabIndex={-1}
            onFocus={() => updateCardItem(item, 'editing', true)}
            onBlur={whenBlurs(() => updateCardItem(item, 'editing', false))}>
            <ItemHandler.view
                item={item}
                updateItemField={(field, value) => updateCardItem(item, field, value)}/>
            {item.editing &&
            <CardItemToolbar
                card={card}
                item={item}
                updateItemField={(field, value) => updateCardItem(item, field, value)}
                removeCardItem={() => removeCardItem(item)}/>
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

const DefaultCardItemHandler = {
    label: 'Default',
    style: '',
    view: DefaultCardItem
};

CardItem.propTypes = {
    card: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
    updateCardItem: PropTypes.func.isRequired,
    removeCardItem: PropTypes.func.isRequired
};

export default CardItem;