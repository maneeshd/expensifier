import React from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Header from "../components/Header"
import ExpenseDashboard from "../components/Dashboard"
import AddExpense from "../components/AddExpense"
import EditExpense from "../components/EditExpense"
import DeleteExpense from "../components/DeleteExpense"
import Help from "../components/Help"
import Error404 from "../components/Error404"
import Contact from "../components/Contact"


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboard} exact={true} />
                <Route path="/add" component={AddExpense} />
                <Route path="/edit/:eid*" component={EditExpense} />
                <Route path="/delete" component={DeleteExpense} />
                <Route path="/help" component={Help} />
                <Route path="/contact" component={Contact} />
                <Route component={Error404} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter