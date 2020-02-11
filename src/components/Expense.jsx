import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Row, Col } from 'react-bootstrap';
import ExpenseForm from './ExpenseForm';
import CudModal from './CudModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';


const Expense = props => {
    const [showEdit, setshowEditModal] = useState(false);
    const [showDelete, setshowDeleteModal] = useState(false);

    const showEditModal = () => {
        setshowEditModal(true);
    };

    const showDeleteModal = () => {
        setshowDeleteModal(true);
    };

    const closeEditModal = () => {
        setshowEditModal(false);
    };

    const closeDeleteModal = () => {
        setshowDeleteModal(false);
    };

    return (
        <tr>
            <th scope="row">{props.idx}</th>
            <td>{props.expense.name}</td>
            <td>${props.expense.amount}</td>
            <td>{props.expense.createdOn.toLocaleString('en-US', {day: '2-digit', month: 'short', year: 'numeric'})}</td>
            <td>{props.expense.description ? props.expense.description : '-'}</td>
            <td>
                <Row className="justify-content-around">
                    <Col className="text-right">
                        <Button
                            size="sm"
                            variant="warning"
                            onClick={showEditModal}
                            className="text-center rounded"
                        >
                            <FontAwesomeIcon icon={faEdit} className="font-weight-bold" />
                        </Button>
                        <CudModal show={showEdit} opString="Edit Expense" closeModal={closeEditModal}>
                            <ExpenseForm
                                eid={props.expense.eid}
                                opString="Update"
                                name={props.expense.name}
                                amount={Number.parseFloat(props.expense.amount)}
                                description={props.expense.description}
                                createdOn={props.expense.createdOn}
                            />
                        </CudModal>
                    </Col>
                    <Col className="text-left">
                        <Button
                            size="sm"
                            variant="danger"
                            onClick={showDeleteModal}
                            className="text-center rounded"
                        >
                            <FontAwesomeIcon icon={faTimes} className="font-weight-bold" />
                        </Button>
                        <CudModal show={showDelete} opString="Delete Expense" closeModal={closeDeleteModal}>
                            <ExpenseForm
                                eid={props.expense.eid}
                                opString="Delete"
                                name={props.expense.name}
                                amount={Number.parseFloat(props.expense.amount)}
                                description={props.expense.description}
                                createdOn={props.expense.createdOn}
                            />
                        </CudModal>
                    </Col>
                </Row>
            </td>
        </tr>
    );
};


Expense.propTypes = {
    idx: PropTypes.number.isRequired,
    expense: PropTypes.object.isRequired
};


export default Expense;
