import React from 'react';
import { Table } from 'react-bootstrap';
import { useExpenseState } from '../contexts/expense-context';
import Expense from './Expense';


const ExpenseTable = () => {
    const expenseList = useExpenseState();

    return (
        <Table responsive bordered hover className="shadow rounded text-center">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Expense</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Edit/Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    expenseList.map((expense, index) => (
                        <Expense expense={expense} key={index + 1} idx={index + 1} />
                    ))
                }
            </tbody>
        </Table>
    );
};


export default ExpenseTable;
