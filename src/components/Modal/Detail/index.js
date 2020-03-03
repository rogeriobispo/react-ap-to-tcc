import React, { useState } from 'react'
import {
    Popover,
    Button,
    Modal,
    OverlayTrigger,
    Glyphicon,
} from 'react-bootstrap';
import './modal.css';

function Detail(props) {
    const [show, setShow] = useState(false);

    function handleClose() {
        setShow(false);
    }

    function handleShow() {
        setShow(true);
    }
    const popover = (
        <Popover id="modal-popover" title={props.propovalMessage.title}>
            {props.propovalMessage.msg}
        </Popover>
    );

    return (
        <div>
            <OverlayTrigger overlay={popover}>
                <Glyphicon
                    glyph="glyphicon glyphicon-eye-open"
                    onClick={handleShow}
                    size={36}
                />
            </OverlayTrigger>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><strong>{props.username.split(' ')[0]}</strong></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.userDetail}
                    <hr />
                </Modal.Body>
                <Modal.Footer>
                    {props.link}
                    {' '}
                    &nbsp;

                    <Button onClick={handleClose} bsStyle="primary">Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Detail;
