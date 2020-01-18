import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/custom.css';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import expensify_store from './store/expensify-store';
import { Provider } from 'react-redux';


const store = expensify_store();


/* Debugging Purposes Only
import { add_expense } from "./actions/expense-actions"
import moment from "moment"

tore.dispatch(add_expense("Water bill", 50, moment("07-Oct-2018", "DD-MMM-YYYY"), ""))

store.dispatch(add_expense("House rent", 7700, moment("04-Oct-2018", "DD-MMM-YYYY"), "random note"))

store.dispatch(add_expense("Gas bill", 150, moment("01-Oct-2018", "DD-MMM-YYYY"), ""))
*/


const App = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(App, document.getElementById('app'));
