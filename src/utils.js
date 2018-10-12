export const log = (any, message, optionalParams) => {
    console.log(message, any, optionalParams); // eslint-disable-line no-console
    return any;
};

export function makeActionCreator(type, ...argNames) {
    return function (...args) {
        const action = { type };
        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index];
        });
        return action;
    };
}

export function when(first, second) {
    return {
        haveDifferent: (field) => first[ field ] !== second[ field ],
        haveSame: (field) => first[ field ] === second[ field ]
    };
}

export function update(obj, field, value) {
    return { ...obj, [ field ]: value };
}

export function updateArrayItem(array = [], matcher, updateItem) {
    return array.map(actual =>
        matcher(actual)
            ? updateItem(actual)
            : doNothing(actual)
    );
}

export function updateArrayByItemId(array = [], item, updateItem) {
    return updateArrayItem(array, matchesByItemId(item), updateItem);
}

function remove(array, matcher) {
    return array.filter(matcher);
}

export function removeByItemId(array, item) {
    return remove(array, actual => when(actual, item).haveDifferent('id'));
}

function matchesByItemId(item) {
    return actual => (when(actual, item).haveSame('id'));
}

function doNothing(obj) {
    return obj;
}