export {
    log,
    makeActionCreator,
    when,
    update,
    updateArrayItem,
    updateArrayItemById,
    removeArrayItem,
    removeArrayItemById,
    removeArrayItems,
    find,
    findByItemId,
    findById,
    isItemIdIn
};

function log(any, message, ...optionalParams) {
    console.log(message, any, ...optionalParams); // eslint-disable-line no-console
    return any;
}

function makeActionCreator(type, ...argNames) {
    return function (...args) {
        const action = { type };
        argNames.forEach((arg, index) => {
            action[ argNames[ index ] ] = args[ index ];
        });
        return action;
    };
}

function when(first, second) {
    return {
        // haveDifferent: (field) => first[ field ] !== second[ field ],
        haveSame: (field) => first[ field ] === second[ field ]
    };
}

function update(obj, field, value) {
    return { ...obj, [ field ]: value };
}

export function addIn(obj, field, value) {
    return {
        ...obj,
        [ field ]: [ ...(obj[ field ] || []), value ]
    };
}

function updateArrayItem(array = [], matcher, updateItem) {
    return array.map(actual =>
        matcher(actual)
            ? updateItem(actual)
            : doNothing(actual)
    );
}

function updateArrayItemById(array = [], item, updateItem) {
    return updateArrayItem(array, hasItemId(item), updateItem);
}

function removeArrayItem(array, item) {
    return array.filter(actual => actual !== item);
}

function removeArrayItems(array, matcher) {
    return array.filter(actual => !matcher(actual));
}

function removeArrayItemById(array, item) {
    return removeArrayItems(array, actual => when(actual, item).haveSame('id'));
}

function hasItemId(item) {
    return hasId(item.id);
}

function hasId(id) {
    return actual => actual.id && actual.id === id;
}

function isItemIdIn(...ids) {
    return item => ids.includes(item.id);
}

function doNothing(obj) {
    return obj;
}

function findByItemId(array, item) {
    return array.find(hasItemId(item));
}

function findById(array, id) {
    return array.find(hasId(id));
}

function find(array, ...matchers) {
    return array.filter(
        item => matchers.map(matcher => matcher(item)).reduce((left, right) => left && right)
    );
}
