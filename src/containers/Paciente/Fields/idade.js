import React from 'react';
import { FormGroup, Col, ControlLabel } from 'react-bootstrap'
import Select from '../../../components/form/Select'

function Idade(props) {
    const idades = [
        <option key={-1} value={-1}>
            Selecione
        </option>
    ]
    for (let i = 0; i < 120; i++) {
        idades.push(
            <option key={i} value={i}>
                {i}
            </option>)
    }
    return (
        <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
                Idade
            </Col>
            <Col sm={2}>
                <Select
                    id='idade'
                    onChange={props.onChange}
                    value={props.value}
                    errors={props.errors}
                    touched={props.touched}
                    items={idades}
                />
            </Col>
        </FormGroup>
    )

}

export default Idade;