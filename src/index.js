import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import CRouter from  "./router/CRouter";

import 'antd-mobile/dist/antd-mobile.css';
import './index.css';
const ADD=()=><h1>hi wxx</h1>

ReactDOM.render(<CRouter/>, document.getElementById('root'));
registerServiceWorker();
