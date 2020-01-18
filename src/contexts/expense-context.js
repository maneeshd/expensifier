'use strict';

/*
* Maneesh Divana <maneeshd77@gmail.com>
* Jan-13-2020
* Contexts for expensifier's store state management
*/

import React, { createContext, useReducer, useContext } from 'react';
import PropTypes from 'prop-types';


// Expenses State Action Reducer
const expenseReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({ eid }) => eid !== action.eid);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.eid === action.eid) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });
        default:
            console.log('[WARNING] Invalid action: ' + JSON.stringify(action));
            return state;
    }
};


// Expenses State Context
const ExpenseStateContext = createContext();
const ExpenseDispatchContext = createContext();


// Expenses State Context Provider
export const ExpenseContextProvider = ({initialState, children}) => {
    const [state, dispatch] = useReducer(expenseReducer, initialState);
    return (
        <ExpenseStateContext.Provider value={state}>
            <ExpenseDispatchContext.Provider value={dispatch}>
                {children}
            </ExpenseDispatchContext.Provider>
        </ExpenseStateContext.Provider>
    );
};

ExpenseContextProvider.propTypes = {
    initialState: PropTypes.array.isRequired,
    children: PropTypes.node
};


// Hook to use the ExpenseStateContext
export const useExpenseState = () => {
    const context = useContext(ExpenseStateContext);
    if (context === undefined) {
        throw new Error('useExpenseState must be used within a ExpenseContextProvider');
    }
    return context;
};


// Hook to use the ExpenseDispatchContext
export const useExpenseDispatch = () => {
    const context = useContext(ExpenseDispatchContext);
    if (context === undefined) {
        throw new Error('useExpenseDispatch must be used within a ExpenseContextProvider');
    }
    return context;
};


// Function for unified ExpenseState & ExpenseDispatch Context
export const useExpenseContext = () => ([useExpenseState(), useExpenseDispatch()]);
