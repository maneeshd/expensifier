'use strict';

import 'typeface-open-sans';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/custom.css';
import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { ExpenseContextProvider } from './contexts/expense-context';
import { FilterContextProvider } from './contexts/filter-context';
import AppRouter from './router';


// Expenses Initial State
const initialExpenseState = [];


// Filters Initial State
const initialFilterState = {
    text: '',
    sort_by: 'date',
    sort_order: 'asc',
    start_date: moment().startOf('month'),
    end_date: moment()
};

const App = () => (
    <ExpenseContextProvider initialState={initialExpenseState}>
        <FilterContextProvider initialState={initialFilterState}>
            <AppRouter />
        </FilterContextProvider>
    </ExpenseContextProvider>
);

ReactDOM.render(<App />, document.getElementById('app-root'));
