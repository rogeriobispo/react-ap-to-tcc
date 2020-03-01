import React from 'react';
import {
    Col,
    FormGroup
} from 'react-bootstrap';
import CheckBox from '../../../components/form/Checbox'

function CamposMedicoAdmin(props) {
    return (
        <FormGroup>
            <Col sm={6}>

                <CheckBox
                    id="doctor"
                    value={props.doctor}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                    title="Medico?"
                />
            </Col>
            <Col sm={6}>

                <CheckBox
                    id="admin"
                    value={props.admin}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                    title="Admin?"
                />
            </Col>
        </FormGroup>

    );
}

export default CamposMedicoAdmin