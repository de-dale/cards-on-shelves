import codex from 'components/codex/reducer';
import cards from 'components/cards/reducer';
import items from 'components/items/reducer';
import importers from 'components/importers/reducer';

export default highOrderReducers(
    [ codex, cards, items, importers ],
    { version: '0.3.0' });

export {
    highOrderReducers
};

function highOrderReducers(reducers, stateOptions = {}) {
    const initialState = mergeInitialStates(reducers, stateOptions);
    return (state = initialState, action) => {
        let _state = state;
        reducers.forEach(reducer => _state = reducer(_state, action));
        return _state;
    };
}

function mergeInitialStates(reducers, options) {
    return {
        ...mergeActions(undefined, reducers, {}),
        ...options
    };
}

function mergeActions(state, reducers, action) {
    return reducers
        .map(reducer => reducer(state, action))
        .reduce((left, right) => ({ ...left, ...right }));
}
