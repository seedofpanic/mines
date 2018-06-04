import {createStore} from 'redux';

export const Reducers = {
    initGame: (state, payload) => {
        return {
            ...state,
            map: payload.newMap,
            total: 10,
            marked: 0,
        };
    },
    openField: (state, payload) => {
        const map = [
            ...state.map
        ];

        map[payload.x][payload.y] = {
            ...map[payload.x][payload.y],
            show: true,
        };

        return {
            ...state,
            map
        };
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