import React from 'react';
import { Modal, ModalBody, ModalHeader, Button } from 'reactstrap';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { edit_expense } from '../actions/expense-actions';


class EditExpense extends React.Component {
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
                <Button id="edit_expense" color="info" onClick={() => this.setState(() => ({modal: true}))} className="rounded-circle px-1 py-0 shadow-sm" size="sm">&#9998;</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} backdrop={this.state.backdrop} size="lg">
                    <ModalHeader toggle={this.toggle}>Edit Expense</ModalHeader>
                    <ModalBody>
                        <ExpenseForm expense={this.props.expense} onSubmit={(update) => {
                            this.props.dispatch(edit_expense(this.props.expense.eid, update));
                            this.toggle();
                        }}/>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default connect()(EditExpense);
