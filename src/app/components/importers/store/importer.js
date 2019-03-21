import { addEntity, indexEntity } from 'entities';
import { isItemIdIn } from 'utils';

const initialState = {
    nextEntityId: 1,
    entities: []
};

export default function importStore(state = initialState, input) {
    const version = input.version;
    switch (version) {
        case '0.3.0':
            return importLatest(state, input);
        default:
            return importTo_0_3_0(state, input);
    }
}

function importLatest(state, input) {
    const result = input.entities.reduce((accumulator, item) => {
        const parents = accumulator.parents;

        parents.prepare(item);
        const index = indexEntity(accumulator.state, { ...item }, ...parents.findParents(item));
        parents.registerParent(item, index.entity);

        return {
            state: index.state,
            parents: accumulator.parents
        };
    }, {
        state: state,
        parents: new ParentMappings()
    });

    return {
        version: '0.3.0',
        ...result.state
    };
}

class ParentMappings {
    constructor() {
        this.parents = [];
    }

    findParents(item) {
        return this.parents
            .filter(parent => isItemIdIn(...parent.input.children)(item))
            .map(parent => parent.migrated);
    }

    static isParent(item) {
        return item.children && item.children.length > 0;
    }

    prepare(item) {
        if (ParentMappings.isParent(item)) {
            this.parents.push({ input: { id: item.id, children: item.children } });
            delete item.children;
        }
    }

    registerParent(item, entity) {
        this.parents
            .filter(parent => parent.input.id === item.id)
            .forEach(parent => parent.migrated = { id: entity.id });
    }
}

const defaultInputBefore_0_3_0 = { cards: { cards: [] } };

function importTo_0_3_0(state, input = defaultInputBefore_0_3_0) {
    const indexedCodex = indexEntity(state, getCodex(input.codex));
    return {
        version: '0.3.0',
        ...importCards(indexedCodex.state, input.cards.cards, indexedCodex.entity)
    };
}

function getCodex(codex = {}) {
    return {
        name: codex.name
            ? codex.name
            : 'Codex Vide',
        type: 'codex',
        children: []
    };
}

function importCards(state, inputCards, parent) {
    let _state = state;
    inputCards.forEach(card => {
        const indexedCard = indexEntity(_state, toCard(card), parent);

        _state = indexedCard.state;

        card.content.forEach(item => {
            _state = addEntity(_state, { ...item }, indexedCard.entity);
        });
    });
    return _state;
}

function toCard(card) {
    const newCard = {
        ...card,
        type: 'card'
    };
    delete newCard.content;
    return newCard;
}