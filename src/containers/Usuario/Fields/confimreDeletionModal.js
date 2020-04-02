import React, { useState } from 'react'
import { Button, Modal, Glyphicon } from 'react-bootstrap'

export default function ModalDelete(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleConfim = () => {

        try {
            props.deleteUser(props.user.id)
            props.setFilter(props.filter.filter(u => u.id !== props.user.id))
            window.flash(`Usuario excluido com sucesso`, 'success');
        } catch (e) {
            window.flash(
                `Erro: ${e.response.data.errors}`,
                'error'
            );
        }
        setShow(false)
    }
    const handleShow = () => setShow(true);

    return (
        <>

            <Button bsStyle="danger" onClick={handleShow}>
                <Glyphicon
                    glyph="glyphicon glyphicon-trash"
                    title="Trocar senha"
                />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Exclusão de usuário</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Excluir:
                    {' '}
                    {props.user.name}
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="primary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button bsStyle="danger" onClick={handleConfim}>
                        Confirma
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}