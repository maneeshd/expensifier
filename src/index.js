'use strict';

import 'typeface-open-sans';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/custom.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { ExpenseContextProvider } from './contexts/expense-context';
import { FilterContextProvider } from './contexts/filter-context';
import AppRouter from './router';


// Expenses Initial State
const initialExpenseState = [];

const today = new Date();

// Filters Initial State
const initialFilterState = {
    text: '',
    sortBy: 'date',
    sortOrder: 'asc',
    startDate: new Date(today.getFullYear(), today.getMonth(), 1),
    endDate: today
};


const App = () => {
    initialExpenseState.push({
        eid: 'asdas-asdas134-a3423dasd',
        name: 'Hospital Bill',
        amount: 1345.78,
        description: null,
        createdOn: new Date()
    });
    return (
        <ExpenseContextProvider initialState={initialExpenseState}>
            <FilterContextProvider initialState={initialFilterState}>
                <AppRouter />
            </FilterContextProvider>
        </ExpenseContextProvider>
    );
};


ReactDOM.render(<App />, document.getElementById('app-root'));
