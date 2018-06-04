import {STORE} from '../index';

export function actionMarkMine(x, y) {
    STORE.dispatch({
        type: 'markMine',
        payload: {
            x,
            y
        }
    })
};