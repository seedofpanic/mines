import React, { Component } from 'react';
import './style.css';
import {Actions} from '../../store/actions';

export class Field extends Component {
    shouldComponentUpdate(newState) {
        return newState.field !== this.props.field;
    }

    render() {
        const field = this.props.field;

        return <td className={
                        'Field'
                        + (field.show ? ' opened' : '')
                        + ((field.show && field.type === 'mine') ? ' mine' : '')
                        + (field.mark ? ' mark' : '')
                    }
                   onClick={!field.mark ? (() => Actions.openField(field.x, field.y)) : undefined}
                   onContextMenu={event => onContextMenu(event, field.x, field.y)}>
            {field.show
                ? (
                    field.type === 'mine'
                    ? '*'
                    : field.danger > 0 ? field.danger : ''
                )
                : (field.mark ? 'v' : '')
            }
        </td>
    }
}

function onContextMenu(event, x, y) {
    event.preventDefault();
    Actions.markMine(x, y);
}