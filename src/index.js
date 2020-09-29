import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'jquery';
import App from './App';
import AppIndex from './AppIndex';
import * as serviceWorker from './serviceWorker';
import './assets/css/bootstrap.min.css';
import './assets/css/resume.min.css';
import './assets/css/bootstrap-grid.min.css';
import './assets/css/bootstrap-reboot.min.css';
import { BrowserRouter, Switch,
    Route, } from 'react-router-dom'

const AppWithRouter = () => (
    <BrowserRouter>
        <Switch>
            {/* <Route exact path="/">
                <AppIndex />
            </Route> */}
            <Route path="/">
                <App />
            </Route>
        </Switch>
        {/* <AppIndex />
        <App /> */}
    </BrowserRouter>
)
ReactDOM.render(<AppWithRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
