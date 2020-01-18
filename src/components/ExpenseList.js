import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import { Table } from 'reactstrap';
import visible_expenses from '../selectors/visibility-controller';
import expenses_summary from '../selectors/expenses-summary';


const ExpenseList = (props) => (
    <Table bordered hover responsive className="shadow rounded">
        <thead>
            <tr>
                <th className="serial-no">#</th>
                <th>Expense</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Description</th>
                <th>Modify</th>
            </tr>
        </thead>
        <tbody>
            {props.expenses.map((expense, index) => <ExpenseListItem expense={expense} idx={index + 1} key={expense.eid} />)}
        </tbody>
    </Table>
);

const map_state_to_props = (state) => {
    return {
        expenses: visible_expenses(state.expenses, state.filters),
        summary: expenses_summary(state.expenses, state.filters)
    };
};

export default connect(map_state_to_props)(ExpenseList);
