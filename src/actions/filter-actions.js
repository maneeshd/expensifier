// Set Text Filter
export const set_text_filter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text: text
})

// Sort By Amount
export const sort_by_amount = () => ({
    type: "SORT_BY_AMOUNT"
})

// Sort By Date
export const sort_by_date = () => ({
    type: "SORT_BY_DATE"
})

//
export const set_sort_order = (order = "asc") => ({
    type: "SET_SORT_ORDER",
    sort_order: order
}) 

// Set start date
export const set_start_date = (start_date) => ({
    type: "SET_START_DATE",
    start_date: start_date
})

// Set end date
export const set_end_date = (end_date) => ({
    type: "SET_END_DATE",
    end_date: end_date
})