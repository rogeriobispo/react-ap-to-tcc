import React from 'react';
import {
    FormGroup,
    Col,
    ControlLabel,
} from 'react-bootstrap';

import TextField from '../../../components/form/TextField'

function CamposTelefone(props) {
    return (

        <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
                Telefone
            </Col>
            <Col sm={4}>
                <TextField
                    id="tel"
                    placeholder="Telefone Fixo"
                    type="text"
                    value={props.valueTel}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                    errors={props.errors}
                    touched={props.touched}
                />
            </Col>
            <Col componentClass={ControlLabel} sm={2}>
                Celular
            </Col>
            <Col sm={4}>
                <TextField
                    id="cel"
                    placeholder="Telefone Celular"
                    type="text"
                    value={props.valueCel}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                    errors={props.errors}
                    touched={props.touched}
                />
            </Col>
        </FormGroup>

    );
}

export default CamposTelefone