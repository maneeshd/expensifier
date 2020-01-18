// Expenses Reducer
const expenses_reducer_default_state = []

export default (state = expenses_reducer_default_state, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [...state, action.expense]
        case "REMOVE_EXPENSE":
            return state.filter(({ eid }) => eid !== action.eid)
        case "EDIT_EXPENSE":
            return state.map((expense) => {
                if(expense.eid === action.eid) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            })
        default:
            return state
    }
}