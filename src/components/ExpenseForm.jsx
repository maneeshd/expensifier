import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useExpenseDispatch } from '../contexts/expense-context';
import uuid from 'uuid';


const DatePickerButton = React.forwardRef((props, ref) => (
    <Button variant="info" ref={ref} onClick={props.onClick}>{props.value}</Button>
));

DatePickerButton.displayName = 'DatePickerButton';

DatePickerButton.propTypes = {
    onClick: PropTypes.func,
    value: PropTypes.string
};

const ExpenseForm = props => {
    const [name, setName] = useState(props.name ? props.name : '');
    const [amount, setAmount] = useState(props.amount ? props.amount : 0.00);
    const [date, setDate] = useState(props.createdOn ? props.createdOn : new Date());
    const [description, setDescription] = useState(props.description ? props.description : '');
    const [validated, setValidated] = useState(false);

    const dispatch = useExpenseDispatch();

    const handleAmountInput = event => {
        event.preventDefault();
        if (/[\d.]+/.test(event.target.value)) {
            setAmount(Number.parseFloat(event.target.value));
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        if (!form.checkValidity()) {
            setValidated(false);
            event.stopPropagation();
        } else {
            setValidated(true);

            const data = {
                name: name,
                amount: amount,
                createdOn: date,
                description: description
            };

            switch (props.opString.toUpperCase()) {
                case 'ADD':
                    dispatch({
                        type: 'ADD_EXPENSE',
                        expense: {
                            eid: uuid(),
                            ...data
                        }
                    });
                    props.closeModal();
                    return true;
                case 'UPDATE':
                    if (!props.eid) {
                        console.error('[ExpenseForm]  props.eid not passed for edit option');
                        return false;
                    }
                    dispatch({
                        type: 'EDIT_EXPENSE',
                        eid: props.eid,
                        updates: data
                    });
                    props.closeModal();
                    return true;
                case 'DELETE':
                    if (!props.eid) {
                        console.error('[ExpenseForm]  props.eid not passed for delete option');
                        return false;
                    }
                    dispatch({
                        type: 'REMOVE_EXPENSE',
                        eid: props.eid
                    });
                    props.closeModal();
                    return true;
                default:
                    console.error(`[ExpenseForm] Invalid operation passed: ${props.opString}`);
                    return false;
            }
        }
    };

    if (props.opString.toUpperCase() === 'DELETE') {
        return (
            <div className="text-center">
                <h5>Sure you want to delete the expense?</h5>
                <Form id="delete-form" onSubmit={handleSubmit} validated={true}>
                    <Form.Group as={Row} className="justify-content-center align-items-center">
                        <Col md={3} className="align-self-center text-right">
                            <Button type="submit" variant="success"><b>Yes</b></Button>
                        </Col>
                        <Col md={3} className="align-self-center text-left">
                            <Button variant="danger" onClick={props.closeModal}><b>No</b></Button>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
        );
    }
    return (
        <Form id="add-edit-form" onSubmit={handleSubmit} validated={validated}>
            <Form.Group as={Row} controlId="expenseName">
                <Form.Label column md={2}>Expense&nbsp;<b className="text-danger">*</b></Form.Label>
                <Col md={10}>
                    <Form.Control
                        type="text"
                        placeholder="Expense"
                        maxLength="32"
                        minLength="4"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                    <Form.Control.Feedback type="invalid">Expense name is required (min chars: 4, max chars: 32)</Form.Control.Feedback>
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="expenseAmount">
                <Form.Label column md={2}>Amount&nbsp;($)<b className="text-danger">*</b></Form.Label>
                <Col md={10}>
                    <Form.Control
                        type="number"
                        placeholder="Expense Amount"
                        required
                        step="0.01"
                        min="0"
                        max="999999999"
                        value={amount}
                        onChange={handleAmountInput}
                    />
                    <Form.Control.Feedback type="invalid">Expense amount is required (max: 999999999)</Form.Control.Feedback>
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="expenseDate">
                <Form.Label column md={2}>Date&nbsp;<b className="text-danger">*</b></Form.Label>
                <Col md={10}>
                    <Form.Control
                        as={DatePicker}
                        showPopperArrow={true}
                        selected={date}
                        onChange={day => setDate(day)}
                        dateFormat="MMM dd, yyyy"
                        maxDate={new Date()}
                        todayButton="Today"
                        locale="en"
                        className="form-control"
                        isClearable={false}
                        onChangeRaw={(e) => {e.preventDefault();}}
                        autoComplete="false"
                        required
                        customInput={<DatePickerButton />}
                        withPortal
                        showYearDropdown
                        dateFormatCalendar="MMMM"
                        yearDropdownItemNumber={5}
                        scrollableYearDropdown
                    />
                    <Form.Control.Feedback type="invalid">Expense date is required</Form.Control.Feedback>
                </Col>
            </Form.Group>

            <Form.Group as={Row} controlId="expenseDescription">
                <Form.Label column md={2}>Description</Form.Label>
                <Col md={10}>
                    <Form.Control
                        as="textarea"
                        placeholder="Expense Description (Optional)"
                        maxLength="64"
                        ows="4"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">Expense description (max chars: 64)</Form.Control.Feedback>
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Col md={{ span: 10, offset: 2 }}>
                    <Button
                        type="submit"
                        variant={props.opString.toUpperCase() === 'ADD' ? 'success' : 'warning'}
                    >
                        <b>{props.opString}</b>
                    </Button>
                </Col>
            </Form.Group>
        </Form>
    );
};


ExpenseForm.propTypes = {
    eid: PropTypes.string,
    opString: PropTypes.string.isRequired,
    name: PropTypes.string,
    amount: PropTypes.number,
    description: PropTypes.string,
    createdOn: PropTypes.any,
    closeModal: PropTypes.func
};


export default ExpenseForm;
