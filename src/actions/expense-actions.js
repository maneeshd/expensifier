import uuid from "uuid"

//Add Expense
export const add_expense = (expense_name, amount, created_on, description) => ({
    type: "ADD_EXPENSE",
    expense: {
        eid: uuid(),
        expense_name: expense_name,
        amount: amount,
        created_on: created_on,
        description: description
    }
})

// Remove Expense
export const remove_expense = (eid) => ({
    type: "REMOVE_EXPENSE",
    eid: eid
})

// Edit Expense
export const edit_expense = (eid, updates = {}) => ({
    type: "EDIT_EXPENSE",
    eid: eid,
    updates: updates
})