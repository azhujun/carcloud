import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {App} from './pages';
import { BrowserRouter } from "react-router-dom";
import state from './actions';
import Toast from 'react-toast-mobile';
import 'react-toast-mobile/lib/react-toast-mobile.css';
ReactDOM.render(
    <div className="App">
        <Toast/>
        <Provider store={state}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </div>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
