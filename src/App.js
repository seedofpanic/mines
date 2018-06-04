import {connect} from 'react-redux';
import React, {Component} from 'react';
import './App.css';
import {Actions} from './store/actions';
import {Map} from './components/Map';

class App extends Component {
    inputs = {
        width: 30,
        height: 20,
        mines: 100,
    };

    render() {
        return (
            <div className="App">
                {this.props.map ? <div>{this.props.marked} / {this.props.total}</div> : ''}
                {this.props.map ? <Map map={this.props.map}></Map> : ''}
                {this.props.result
                    ? <div
                        className={'result ' + (this.props.result.success ? 'success' : '')}>
                            {this.props.result.message}
                        </div>
                    : ''
                }
                <div>width: <input type="text"
                                   defaultValue={this.inputs.width}
                                   name="width"
                                   onChange={this.onInputChanges.bind(this)}/></div>
                <div>height: <input type="text"
                                    defaultValue={this.inputs.height}
                                    name="height"
                                    onChange={this.onInputChanges.bind(this)}/></div>
                <div>mines: <input type="text"
                                   defaultValue={this.inputs.mines}
                                   name="mines"
                                   onChange={this.onInputChanges.bind(this)}/></div>
                <button className="start-button" onClick={() => Actions.initGame(this.inputs)}>Start</button>
            </div>
        );
    }

    onInputChanges({target}) {
        this.inputs[target.name] = Math.abs(target.value);
    }
}

function mapStateToProps(state) {
    return {
        map: state.map,
        marked: state.marked,
        total: state.total,
        result: state.result,
    };
}

export default connect(mapStateToProps)(App);
