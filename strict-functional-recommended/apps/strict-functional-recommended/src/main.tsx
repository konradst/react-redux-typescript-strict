import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/app';

import store from './app/store';
import { Provider } from 'react-redux';

export const dom = ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
