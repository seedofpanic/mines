import {STORE} from '../index';

export function actionMarkMine(x, y) {
    let state = STORE.getState();

    if (state.result) {
        return;
    }

    if (!state.map[x][y].mark && state.total === state.marked) {
        return;
    }

    STORE.dispatch({
        type: 'markMine',
        payload: {
            x,
            y
        }
    })
};