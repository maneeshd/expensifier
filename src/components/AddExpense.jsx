'use strict';

import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import CudModal from './CudModal';
import { Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';



export default function AddExpense() {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <Container className="text-center my-2">
            <Button variant="success" className="rounded-pill" onClick={openModal}>
                <FontAwesomeIcon icon={faPlus} />&nbsp;New
            </Button>

            <CudModal show={showModal} opString="Add Expense" closeModal={closeModal}>
                <ExpenseForm
                    eid=""
                    opString="Add"
                    name=""
                    amount=""
                    description=""
                    createdOn={null}
                />
            </CudModal>
        </Container>
    );
}
