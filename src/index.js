import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
// import App from './App';
// import this because this file will handle the minified css/js
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes history={ Router } />, 
	document.getElementById('root'));
registerServiceWorker();
