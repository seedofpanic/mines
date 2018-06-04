import {STORE} from '../index';

export function actionOpenField(x, y) {
    let map = STORE.getState().map;

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

    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            if (map[x + i] && map[x + i][y + j] && !map[x + i][y + j].show) {
                setTimeout(() => {
                    actionOpenField(x + i, y + j);
                }, 100);
            }
        }
    }
}