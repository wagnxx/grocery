import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import CRouter from  "./router/CRouter";

import { Provider } from 'react-redux';
import configureStore from './store/index'


import 'antd-mobile/dist/antd-mobile.css';
import 'antd/dist/antd.css';
import './index.css';
// const ADD=()=><h1>hi wxx</h1>
const store = configureStore()


ReactDOM.render(<Provider store={store}><CRouter/></Provider>, document.getElementById('root'));
registerServiceWorker();
