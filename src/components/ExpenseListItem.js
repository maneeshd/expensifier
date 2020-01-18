import React from 'react';
import { connect } from 'react-redux';
import visible_expenses from '../selectors/visibility-controller';
import EditExpense from './EditExpense';
import DeleteExpense from './DeleteExpense';


const ExpenseListItem = ({ expense, idx, dispatch }) => (
    <React.Fragment>
        <tr>
            <th scope="row" className="serial-no">{idx}</th>
            <td>{expense.expense_name}</td>
            <td><strong>$</strong>{expense.amount}</td>
            <td>{expense.created_on.format('DD-MMM-YYYY')}</td>
            <td>{expense.description ? expense.description: <strong>-</strong>}</td>
            <td>
                <EditExpense expense={expense} />
                <DeleteExpense eid={expense.eid} />
            </td>
        </tr>
    </React.Fragment>
);

const map_state_to_props = (state) => {
    return {
        expenses: visible_expenses(state.expenses, state.filters)
    };
};

export default connect(map_state_to_props)(ExpenseListItem);

