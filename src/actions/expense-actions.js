'use strict';

import uuid from 'uuid';


//Add Expense
export const addExpense = (expenseName, amount, createdOn, description) => ({
    type: 'ADD_EXPENSE',
    expense: {
        eid: uuid(),
        expenseName: expenseName,
        amount: amount,
        createdOn: createdOn,
        description: description
    }
});


// Remove Expense
export const removeExpense = (eid) => ({
    type: 'REMOVE_EXPENSE',
    eid: eid
});


// Edit Expense
export const editExpense = (eid, updates = {}) => ({
    type: 'EDIT_EXPENSE',
    eid: eid,
    updates: updates
});
