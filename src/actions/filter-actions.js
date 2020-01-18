// Set Text Filter
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text: text
});

// Sort By Amount
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

// Sort By Date
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// Set sorting order
export const setSortOrder = (order = 'asc') => ({
    type: 'SET_SORT_ORDER',
    sortOrder: order
});

// Set start date
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate: startDate
});

// Set end date
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate: endDate
});
