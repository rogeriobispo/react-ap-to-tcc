import React from 'react';
import {
    FormGroup,
    Col,
    ControlLabel,
} from 'react-bootstrap';

import TextField from '../../../components/form/TextField'

function CampoDocumento(props) {
    return (

        <FormGroup controlId="nome">
            <Col componentClass={ControlLabel} sm={2}>
                RG
            </Col>
            <Col sm={10}>
                <TextField
                    id="rg"
                    placeholder="rg"
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

export default CampoDocumento