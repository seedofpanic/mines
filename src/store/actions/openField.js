import {STORE} from '../index';

export function actionOpenField(x, y) {
    STORE.dispatch({
        type: 'openField',
        payload: {
            x,
            y
        }
    })
};