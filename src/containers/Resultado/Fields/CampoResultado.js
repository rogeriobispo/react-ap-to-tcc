import React from 'react';
import {
    FormGroup,
    Col,
    ControlLabel,
} from 'react-bootstrap';

import TextArea from '../../../components/form/TextArea'

function CampoDescription(props) {
    return (

        <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
                Resultado
            </Col>
            <Col sm={10}>
                <TextArea
                    id="resultado"
                    placeholder="resultado"
                    value={props.value}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                    errors={props.errors}
                    touched={props.touched}
                    rows={props.rows}
                />
            </Col>
        </FormGroup>

    );
}

export default CampoDescription