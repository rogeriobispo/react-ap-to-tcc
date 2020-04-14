import React from 'react';
import { Panel, Col, FormGroup, Button, Glyphicon, Table } from 'react-bootstrap'

function MedicementosList(props) {
    function showReceita(medicamento) {
        return (
            <tr>
                <td>{medicamento.name}</td>
                <td>{medicamento.factory}</td>
                <td>{medicamento.dose}</td>
                <td>
                    <Button bsStyle="danger" onClick={() => props.removeMedicamento(medicamento.id)}>
                        <Glyphicon
                            glyph="glyphicon glyphicon-trash"
                            title="Trocar senha"
                        />
                    </Button>
                </td>
            </tr>
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
                        <Table striped bordered condensed hover>
                            <thead>
                                <tr>
                                    <th>Medicamento</th>
                                    <th>Fabricante</th>
                                    <th>Dose</th>
                                    <th>Remover</th>
                                </tr>
                            </thead>
                            <tbody>

                                {props.medicamentos.map(m => showReceita(m))}
                            </tbody>
                        </Table>
                    </Panel.Body>
                </Panel>

            </Col>
        </FormGroup>
    );
}

export default MedicementosList;