import React from 'react';
import {
    FormGroup,
    Col,
    ControlLabel,
} from 'react-bootstrap';

import TextField from '../../../../components/form/TextField'

function CampoNome(props) {
    return (

        <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
                Especialidade
            </Col>
            <Col sm={10}>
                <TextField
                    id="nome"
                    placeholder="Especialidade"
                    type="text"
                    value={props.value}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                    errors={props.errors}
                    touched={props.touched}
                />
            </Col>
        </FormGroup>

    );
}

export default CampoNome