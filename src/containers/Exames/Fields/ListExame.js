import React from 'react';
import { Panel, Col, FormGroup, Button, Glyphicon, Table } from 'react-bootstrap'

function ListExame(props) {
    function showExame(medicamento) {
        return (
            <tr>
                <td>
                    {medicamento}
                </td>
                <d>
                    <Button bsStyle="danger" onClick={() => props.removeExames(medicamento)}>
                        <Glyphicon
                            glyph="glyphicon glyphicon-trash"
                            title="Trocar senha"
                        />
                    </Button>
                </d>
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
                                    <th>Exame</th>
                                    <th>Remover</th>
                                </tr>
                            </thead>
                            {props.exames.map(m => showExame(m))}
                        </Table>
                    </Panel.Body>
                </Panel>

            </Col>
        </FormGroup>
    );
}

export default ListExame;