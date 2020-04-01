import React from 'react';
import {
    FormGroup,
    Col,
    ControlLabel,
} from 'react-bootstrap';

import TextField from '../../../components/form/TextField'

function CampoImage(props) {
    return (

        <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
                Imagem
            </Col>
            <Col sm={10}>
                <TextField
                    id="image"
                    placeholder="imagem"
                    type="file"
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

export default CampoImage