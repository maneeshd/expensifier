import { createStore, combineReducers } from "redux";
import expenses_reducer from "../reducers/expenses-reducer"
import filters_reducer from "../reducers/filters-reducer"


export default () => (
    createStore(
        combineReducers({
            expenses: expenses_reducer,
            filters: filters_reducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)