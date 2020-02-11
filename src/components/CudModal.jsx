import React from 'react';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';


const CudModal = props => {
    return (
        <Modal
            show={props.show}
            backdrop="static"
            scrollable={true}
            size={props.opString.toUpperCase().includes('DELETE') ? 'sm' : 'lg'}
            centered={true}
            onHide={props.closeModal}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.opString}
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {
                    // Clones props.children elements and adds new prop
                    React.Children.map(props.children, child => React.cloneElement(child, {closeModal: props.closeModal}))
                }
            </Modal.Body>
        </Modal>
    );
};


CudModal.propTypes = {
    show: PropTypes.bool.isRequired,
    children: PropTypes.node,
    opString: PropTypes.string.isRequired,
    closeModal: PropTypes.func
};

export default CudModal;
