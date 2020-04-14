import React from 'react';
import {
    Col,
    FormGroup
} from 'react-bootstrap';
import CheckBox from '../../../components/form/Checkbox'

function CamposRoles(props) {
    return (
        <FormGroup>

            <Col sm={4}>

                <CheckBox
                    id="doctor"
                    value={props.doctor}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                    title="Médico?"
                />
            </Col>
            <Col sm={4}>

                <CheckBox
                    id="atendent"
                    value={props.atendent}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                    title="Recepcionista?"
                />
            </Col>
            <Col sm={4}>

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

export default CamposRoles