export default function importTrelloCard(trelloCard, parent, nextId = _nextId(1)) {
    return {
        entities: importCards(trelloCard, parent, nextId)
    };
}

const _nextId = (id) => () => id++;

function importCards(trelloCard, parent, nextId) {
    const items = importItems(trelloCard, nextId);
    const newCard = importCard(trelloCard, parent, nextId, items);
    return items.concat(newCard);
}

function importCard(trelloCard, parent, nextId, children) {
    return [ {
        name: trelloCard.name,
        id: nextId(),
        type: 'card',
        children: children.map(child => child.id),
        ...parent
    } ];
}

function importItems(trelloCard, nextId) {
    const description = trelloCard.desc;
    if (description === '') {
        return [ createTitle(trelloCard.name, nextId) ];
    }
    return makeFactory(createItem, '', '\n\n')(description, nextId);
}

function makeFactory(factory, delimiter, separator) {
    return (item, nextId) => item.replace(delimiter, '')
        .trim()
        .split(separator)
        .flatMap(sub => factory(sub, nextId));
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

function createField(item, nextId) {

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
        id: nextId(),
        content: content,
        type: 'field',
        ...header
    };
}

function createText(text, nextId) {
    return {
        id: nextId(),
        content: text,
        type: 'text'
    };
}

function createTitle(title, nextId) {
    return {
        id: nextId(),
        content: title,
        type: 'title'
    };
}
