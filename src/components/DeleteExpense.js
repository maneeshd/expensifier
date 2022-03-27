import React from 'react'
import { connect } from 'react-redux'
import { remove_expense } from '../actions/expense-actions'
import { Button } from 'reactstrap'

const DeleteExpense = (props) => (
  <Button
    color="danger"
    id="delete_expense"
    className="rounded-circle px-1 py-0 shadow-sm resp-btn-margin"
    size="sm"
    onClick={() => props.dispatch(remove_expense(props.eid))}
  >
    &#10006;
  </Button>
)

export default connect()(DeleteExpense)
