import React, { Component } from 'react';
import './style.css';
import {MapRow} from '../MapRow';

export class Map extends Component {
    render() {
        const map = this.props.map;

        return <table className="Map"><tbody>{
            map.map((row, index) => <MapRow key={index} row={row}></MapRow>)
        }</tbody></table>;
    }
}