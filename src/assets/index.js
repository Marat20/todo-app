import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { App } from '../App';
import { Provider } from 'react-redux';
import {store} from '../redux/store';
import './styles.css';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
)
