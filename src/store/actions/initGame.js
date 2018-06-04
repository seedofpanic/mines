import {STORE} from '../index';

export function actionInitGame() {
    const newMap = [];
    let minesToPlace = 10;

    for (let x = 0; x < 10; x++) {
        newMap[x] = [];
        for (let y = 0; y < 10; y++) {
            newMap[x][y] = {type: 'empty', show: false, danger: 0, x, y};
        }
    }

    while (minesToPlace > 0) {
        const x = Math.floor(Math.random() * 9.99999);
        const y = Math.floor(Math.random() * 9.99999);

        if (newMap[x][y].type === 'empty') {
            newMap[x][y].type = 'mine';

            if (x > 0) {
                newMap[x - 1][y].danger++;

                if (y > 0) {
                    newMap[x - 1][y - 1].danger++;
                }

                if (y < 9) {
                    newMap[x - 1][y + 1].danger++;
                }
            }

            if (y > 0) {
                newMap[x][y - 1].danger++;
            }

            if (x < 9) {
                newMap[x + 1][y].danger++;

                if (y < 9) {
                    newMap[x + 1][y + 1].danger++;
                }

                if (y > 0) {
                    newMap[x + 1][y - 1].danger++;
                }
            }

            if (y < 9) {
                newMap[x][y + 1].danger++;
            }

            minesToPlace--;
        }
    }

    STORE.dispatch({
        type: 'initGame',
        payload: {
            newMap: newMap,
        }
    });
};