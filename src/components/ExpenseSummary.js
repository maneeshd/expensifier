import React from 'react'
import { connect } from 'react-redux'
import visible_expenses from '../selectors/visibility-controller'
import expenses_summary from '../selectors/expenses-summary'

const ExpenseSummary = (props) => <p>{props.summary}</p>

const map_state_to_props = (state) => {
  const expenses = visible_expenses(state.expenses, state.filters)
  return {
    summary: expenses_summary(expenses, state.filters),
  }
}

export default connect(map_state_to_props)(ExpenseSummary)
