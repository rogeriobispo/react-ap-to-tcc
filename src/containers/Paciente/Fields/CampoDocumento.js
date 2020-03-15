import React from 'react';
import {
    FormGroup,
    Col,
    ControlLabel,
} from 'react-bootstrap';

import TextField from '../../../components/form/TextField'

function CampoDocumento(props) {
    return (

        <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
                Documento
            </Col>
            <Col sm={10}>
                <TextField
                    id="documento"
                    placeholder="documento"
                    type="text"
                    disabled={props.disabled}
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

export default CampoDocumento