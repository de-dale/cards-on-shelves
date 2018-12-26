export {
    log,
    makeActionCreator,
    when,
    update,
    updateArrayItem,
    updateArrayItemById,
    removeItemById,
    findById,
    isIdIn
};

function log (any, message, optionalParams) {
    console.log(message, any, optionalParams); // eslint-disable-line no-console
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
        haveDifferent: (field) => first[ field ] !== second[ field ],
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

function remove(array, matcher) {
    return array.filter(matcher);
}

function removeItemById(array, item) {
    return remove(array, actual => when(actual, item).haveDifferent('id'));
}

function hasItemId(item) {
    return actual => when(actual, item).haveSame('id');
}

function isIdIn(ids) {
    return item => ids.includes(item.id);
}

function doNothing(obj) {
    return obj;
}

function findById(array, item) {
    return array.find(hasItemId(item));
}
