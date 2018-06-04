import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {STORE} from './store';
import {Provider} from 'react-redux';

ReactDOM.render(<Provider store={STORE}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
