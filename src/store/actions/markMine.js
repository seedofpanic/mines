import {STORE} from '../index';
import {Actions} from './index';
import {forFieldsBlock} from './openField';

export function actionMarkMine(x, y) {
    let state = STORE.getState();

    if (state.result) {
        return;
    }

    if (state.map[x][y].show) {
        let countMarks = 0;
        forFieldsBlock(state.map, x, y, field => {
            countMarks += field.mark ? 1 : 0;
        });

        if (countMarks === state.map[x][y].danger) {
            forFieldsBlock(state.map, x, y, (field, xi, yj) => {
                if (!field.mark) {
                    Actions.openField(xi, yj);
                }
            });
        }
    } else if (state.map[x][y].mark && state.total === state.marked) {
        return;
    } else {
        STORE.dispatch({
            type: 'markMine',
            payload: {
                x,
                y
            }
        });
    }
};