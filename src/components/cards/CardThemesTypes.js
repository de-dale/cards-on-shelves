const _CardThemesTypes = {

    default: {
        name: '',
        label: '-'
    },
    white: {
        name: 'white',
        label: 'Blanc'
    },
    green: {
        name: 'green',
        label: 'Vert'
    },
    blue: {
        name: 'blue',
        label: 'Blue'
    },
    red: {
        name: 'red',
        label: 'Rouge'
    },
    cyan: {
        name: 'cyan',
        label: 'Cyan'
    },
    magenta: {
        name: 'magenta',
        label: 'Magenta'
    },
    yellow: {
        name: 'yellow',
        label: 'Jaune'
    },
    greenLight: {
        name: 'green-light',
        label: 'Vert clair'
    },
    blueLight: {
        name: 'blue-light',
        label: 'Bleu clair'
    },
    redLight: {
        name: 'red-light',
        label: 'Rouge clair'
    },
    yellowLight: {
        name: 'yellow-light',
        label: 'Jaune clair'
    },
    redGray: {
        name: 'red-gray',
        label: 'Rouge gris'
    },
    greenLizard: {
        name: 'green-lizard',
        label: 'Vert Lézard'
    }

};

Object.defineProperty(_CardThemesTypes, 'values', {
    writable: false,
    value: (mapEach) => Object.entries(_CardThemesTypes).map(([name, value]) => {
        return mapEach(name, value);
    })
});

export const CardThemesTypes = Object.freeze(_CardThemesTypes);
