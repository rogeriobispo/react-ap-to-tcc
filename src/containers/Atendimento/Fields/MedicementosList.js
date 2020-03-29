import React from 'react';
import { Panel, Col, FormGroup } from 'react-bootstrap'

function MedicementosList(props) {
    function showReceita(medicamento) {
        return (
            <p>
                {' '}
                {medicamento.name}
                {' '}
                -
                {' '}
                {medicamento.dose}
                {' '}
            </p>
        )
    }
    return (
        <FormGroup>
            <Col sm={12}>
                <Panel bsStyle="primary">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Receita</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        {props.medicamentos.map(m => showReceita(m))}
                    </Panel.Body>
                </Panel>

            </Col>
        </FormGroup>
    );
}

export default MedicementosList;