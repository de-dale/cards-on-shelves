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