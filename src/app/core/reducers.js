import codex from '../components/codex/reducer';
import cards from '../components/cards/reducer';
import items from '../components/items/reducer';

export default highOrderReducers('0.3.0', [ codex, cards, items ]);

function highOrderReducers(version, reducers) {
    const initialState = getFlatInitialsStates(version, reducers);
    return (state = initialState, action) => {
        let _state = state;
        reducers.forEach(reducer => _state = reducer(_state, action));
        return _state;
    };
}

function getFlatInitialsStates(version, reducers) {
    return {
        version,
        ...actIndependently(reducers, undefined, {})
    };
}

function actIndependently(reducers, state, action) {
    return reducers
        .map(reducer => reducer(state, action))
        .reduce((left, right) => {
            return { ...left, ...right };
        });
}
