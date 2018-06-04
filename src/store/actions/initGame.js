import {STORE} from '../index';
import {forFieldsBlock} from './openField';

export function actionInitGame({width, height, mines}) {
    const newMap = [];
    let minesToPlace = mines;

    for (let x = 0; x < height; x++) {
        newMap[x] = [];
        for (let y = 0; y < width; y++) {
            newMap[x][y] = {type: 'empty', show: false, danger: 0, x, y};
        }
    }

    while (minesToPlace > 0) {
        const x = Math.floor(Math.random() * height - 0.000001);
        const y = Math.floor(Math.random() * width - 0.000001);

        if (newMap[x][y].type === 'empty') {
            newMap[x][y].type = 'mine';

            forFieldsBlock(newMap, x, y, field => {
                if ((x === field.x) && (y === field.y)) {
                    return;
                }

                field.danger++;
            });

            minesToPlace--;
        }
    }

    STORE.dispatch({
        type: 'initGame',
        payload: {
            newMap: newMap,
            minesTotal: mines
        }
    });
};