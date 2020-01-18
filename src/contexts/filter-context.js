'use strict';

/*
* Maneesh Divana <maneeshd77@gmail.com>
* Jan-13-2020
* Context for expensifier's filter state management
*/

import React, { createContext, useReducer, useContext } from 'react';
import PropTypes from 'prop-types';


// Filters State Action Reducer
const filterReducer = (state, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_SORT_ORDER':
            return {
                ...state,
                sortOrder: action.sortOrder
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            console.log('[WARNING] Invalid action: ' + JSON.stringify(action));
            return state;
    }
};


// Filters State Context
const FilterStateContext = createContext();
const FilterDispatchContext = createContext();


// Filters State Context Provider
export const FilterContextProvider = ({initialState, children}) => {
    const [state, dispatch] = useReducer(filterReducer, initialState);
    return (
        <FilterStateContext.Provider value={state}>
            <FilterDispatchContext.Provider value={dispatch}>
                {children}
            </FilterDispatchContext.Provider>
        </FilterStateContext.Provider>
    );
};

FilterContextProvider.propTypes = {
    initialState: PropTypes.object.isRequired,
    children: PropTypes.node
};


// Hook to use the FilterStateContext
export const useFilterState = () => {
    const context = useContext(FilterStateContext);
    if (context === undefined) {
        throw new Error('useFilterState must be used within a FilterContextProvider');
    }
    return context;
};


// Hook to use the FilterDispatchContext
export const useFilterDispatch = () => {
    const context = useContext(FilterDispatchContext);
    if (context === undefined) {
        throw new Error('useFilterDispatch must be used within a FilterContextProvider');
    }
    return context;
};


// Function for unified FilterState & FilterDispatch Context
export const useFilterContext = () => ([useFilterState(), useFilterDispatch()]);
