export default function migrate(origin) {
    if(origin === undefined) {
        return {
            version: '0.3.0',
            nextEntityId: 1,
            entities: [{
                id: 0,
                name: 'Codex Vide',
                type: 'codex',
                children: []
            }]

        };
    }
    
    let _id = 1;
    function nextId() {
        return _id++;
    }

    const cards = migrateCards(origin.cards.cards, nextId);
    const codex = migrateCodex(origin.codex, nextId, cards.filter(card => card.type === 'card'));
    return {
        version: '0.3.0',
        nextEntityId: _id,
        entities: codex.concat(cards)
    };
}

function migrateCodex(codex, nextId, cards) {
    if (codex === undefined) {
        return [];
    }
    return [{
        id: nextId(),
        name: codex.name,
        type: 'codex',
        children: cards.map(card => card.id)
    }];
}

function migrateCards(origin, nextId) {
    return origin.flatMap(card => {
        const items = migrateItems(card, nextId);
        const newCard = migrateCard(card, nextId, items);
        return newCard.concat(items);
    });
}

function migrateCard(card, nextId, items) {
    delete card.content;
    return [{
        ...card,
        id: nextId(),
        type: 'card',
        children: items.map(item => item.id)
    }];
}

function migrateItems(card, nextId) {
    return card.content.map(item => migrateItem(item, nextId));
}

function migrateItem(item, nextId) {
    return { ...item, id: nextId() };
}