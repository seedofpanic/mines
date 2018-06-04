import {STORE} from '../index';

export function actionOpenField(x, y) {
    const state = STORE.getState();
    let map = state.map;

    if (state.result) {
        return;
    }

    if (map[x][y].show) {
        return;
    }

    STORE.dispatch({
        type: 'openField',
        payload: {
            x,
            y
        }
    });

    map = STORE.getState().map;

    if (map[x][y].danger !== 0) {
        return;
    }

    forFieldsBlock(map, x, y, (field, xi, yj) => {
        if (!field.show) {
            setTimeout(() => {
                actionOpenField(xi, yj);
            }, 100);
        }
    });
}

export function forFieldsBlock(map, x, y, func) {
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            if (map[x + i] && map[x + i][y + j]) {
                func(map[x + i][y + j], x + i, y + j);
            }
        }
    }
}