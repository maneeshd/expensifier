import moment from "moment"


// Filters Reducer
const filters_default_state = {
    text: "",
    sort_by: "date",
    sort_order: "asc",
    start_date: moment().startOf("month"),
    end_date: moment()
}

export default (state = filters_default_state, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            }
        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sort_by: "amount"
            }
        case "SORT_BY_DATE":
            return {
                ...state,
                sort_by: "date"
            }
        case "SET_SORT_ORDER":
            return {
                ...state,
                sort_order: action.sort_order
            }
        case "SET_START_DATE":
            return {
                ...state,
                start_date: action.start_date
            }
        case "SET_END_DATE":
            return {
                ...state,
                end_date: action.end_date
            }
        default:
            return state
    }
}