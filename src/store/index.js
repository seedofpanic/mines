import {createStore} from 'redux';

export const Reducers = {
    initGame: (state, payload) => {
        return {
            ...state,
            map: payload.newMap,
            total: 10,
            marked: 0,
            result: undefined
        };
    },
    openField: (state, payload) => {
        const field = state.map[payload.x][payload.y];
        const newState = {
            ...state
        };

        newState.map = [
            ...state.map
        ];

        if (field.type === 'mine') {
            newState.result = {
                success: false,
                message: 'You loose :('
            };
        }

        const toOpen = newState.map.reduce((result, row) =>
            result + row.reduce((result, field) => result + (field.show ? 1 : 0), 0),
            0);

        if (toOpen > state.total) {
            newState.result = {
                success: true,
                message: 'You won the game, yey!'
            }
        }

        newState.map[payload.x][payload.y] = {
            ...field,
            show: true,
        };

        return newState;
    },
    markMine: (state, payload) => {
        const map = [
            ...state.map
        ];

        map[payload.x][payload.y] = {
            ...map[payload.x][payload.y],
            mark: !map[payload.x][payload.y].mark,
        };

        return {
            ...state,
            map,
            marked: state.marked + (map[payload.x][payload.y].mark ? 1 : -1),
        };
    }
};

function reducer(state, action) {
    return (Reducers[action.type] || (() => state))(state, action.payload);
}

export const STORE = createStore (
    reducer,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);