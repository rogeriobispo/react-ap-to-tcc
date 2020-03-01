import React from 'react';
import {
    Col,
    ControlLabel,
} from 'react-bootstrap';

import TextField from '../../../components/form/TextField'

function CampoCrm(props) {
    return (
        <>
            <Col componentClass={ControlLabel} sm={2}>
                CRM
            </Col>
            <Col sm={4}>
                <TextField
                    id="crm"
                    placeholder="crm"
                    type="text"
                    value={props.value}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                    errors={props.errors}
                    touched={props.touched}
                />
            </Col>
        </>
    );
}

export default CampoCrm