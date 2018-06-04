import React, { Component } from 'react';
import {Field} from '../Field';
import './style.css';

export class Map extends Component {
    render() {
        const map = this.props.map;

        return <table className="Map"><tbody>{
            map.map((row, index) => <tr className="row" key={index}>
                {row.map((field, index) => <Field key={index} field={field}></Field>)}
            </tr>)
        }</tbody></table>;
    }
}