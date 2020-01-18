'use strict';

import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import About from './components/About';


// const Dashboard = () => (<h1>Expensifier Dashboard</h1>);


// const Contact = () => (<h1>Maneesh Divana</h1>);


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/dashboard" component={Dashboard} />
                {/* <Route path="/add" component={AddExpense} />
                <Route path="/edit/:eid*" component={EditExpense} />
                <Route path="/delete" component={DeleteExpense} />
                <Route path="/help" component={Help} /> */}
                <Route path="/about" component={About} />
                {/* <Route component={Error404} /> */}
            </Switch>
        </div>
    </BrowserRouter>
);


export default AppRouter;
