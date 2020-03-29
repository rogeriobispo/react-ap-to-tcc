import React from 'react';
import { Panel, Col, FormGroup } from 'react-bootstrap'

function ListExame(props) {
    function showExame(medicamento) {
        return (
            <p>
                {medicamento}
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
                        {props.exames.map(m => showExame(m))}
                    </Panel.Body>
                </Panel>

            </Col>
        </FormGroup>
    );
}

export default ListExame;