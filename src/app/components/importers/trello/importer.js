import { addEntity, indexEntity } from 'entities';

export {
    importCards
};

function importCards(state, trelloCard, parent) {
    const { state: _state, entity: card } = importCard(state, trelloCard, parent);
    return importItems(_state, trelloCard, card);
}

function importCard(state, trelloCard, parent) {
    return indexEntity(state, {
        name: trelloCard.name,
        type: 'card'
    }, parent);
}

function importItems(state, trelloCard, cardAsParent) {
    const description = trelloCard.desc;
    if (description === '') {
        return addEntity(state, createTitle(trelloCard.name), cardAsParent);
    }

    const items = createItems(description);
    return insertItems(state, items, cardAsParent);
}

function insertItems(state, items, cardAsParent) {
    let _state = state;
    items.forEach(item => _state = addEntity(_state, item, cardAsParent));
    return _state;
}

function createItems(description) {
    return makeFactory(createItem, '', '\n\n')(description);
}

function makeFactory(factory, delimiter, separator) {
    return (item) => item.replace(delimiter, '')
        .trim()
        .split(separator)
        .flatMap(sub => factory(sub));
}

function createItem(item, nextId) {
    return findFactory(item)(item, nextId);
}

function findFactory(item) {
    if (item.startsWith('# ')) {
        return makeFactory(createTitle, '# ');
    }
    if (item.startsWith('> ')) {
        return makeFactory(createField, '> ', '\n> ');
    }

    if (item.startsWith('')) {
        return makeFactory(createText, '');
    }
    return () => [];
}

function createField(item) {
    const items = item.trim()
        .split('|');
    const content = items.length > 1
        ? items[ 1 ].trim()
        : items[ 0 ].trim();
    const header = {
        header: items.length > 1
            ? items[ 0 ].trim()
            : undefined
    };
    return {
        content: content,
        type: 'field',
        ...header
    };
}

function createText(text) {
    return {
        content: text,
        type: 'text'
    };
}

function createTitle(title) {
    return {
        content: title,
        type: 'title'
    };
}
