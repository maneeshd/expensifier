'use strict';


import React from 'react';
import { Container } from 'react-bootstrap';
import ExpenseTable from './ExpenseTable';
import AddExpense from './AddExpense';


const Dashboard = () => (
    <Container fluid className="text-center mx-auto rounded exp-cls py-2">
        <h1>Expensifier</h1>
        <ExpenseTable />
        <AddExpense />
    </Container>
);


export default Dashboard;
