import React, { Component } from 'react';
import {Field} from '../Field';

export class MapRow extends Component {
    shouldComponentUpdate(newState) {
        return newState.row !== this.props.row;
    }

    render() {
        return <tr className="row">
            {this.props.row.map((field, index) => <Field key={index} field={field}></Field>)}
        </tr>;
    }
}