import React from 'react';
import { Modal, ModalBody, ModalHeader, Button } from 'reactstrap';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { add_expense } from '../actions/expense-actions';


class AddExpense extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            backdrop: true
        };

        this.toggle = this.toggle.bind(this);
        this.changeBackdrop = this.changeBackdrop.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    changeBackdrop(e) {
        let value = e.target.value;
        if (value !== 'static') {
            value = JSON.parse(value);
        }
        this.setState({ backdrop: value });
    }

    render() {
        return (
            <React.Fragment>
                <Button color="success" onClick={() => this.setState(() => ({modal: true}))} className="shadow-sm w-auto mt-2 mb-4">Add Expense</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop} size="lg">
                    <ModalHeader toggle={this.toggle}>Add Expense</ModalHeader>
                    <ModalBody>
                        <ExpenseForm  onSubmit={(expense) => {
                            this.props.dispatch(add_expense(
                                expense.expense_name,
                                expense.amount,
                                expense.created_on,
                                expense.description
                            ));
                            this.toggle();
                        }}/>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default connect()(AddExpense);
