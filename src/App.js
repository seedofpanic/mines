import {connect} from 'react-redux';
import React, { Component } from 'react';
import './App.css';
import {Actions} from './store/actions';
import {Map} from './components/Map';

class App extends Component {
  render() {
    return (
      <div className="App">
          {this.props.map ? <div>{this.props.marked} / {this.props.total}</div> : ''}
          {this.props.map ? <Map map={this.props.map}></Map> : ''}
          <button onClick={Actions.initGame}>Start</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        map: state.map,
        marked: state.marked,
        total: state.total
    };
}

export default connect(mapStateToProps)(App);
