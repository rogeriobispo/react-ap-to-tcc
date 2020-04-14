import React from 'react';
import { FormControl, FormGroup, Col } from 'react-bootstrap';

function CheckBox(props) {
    return (
        <FormGroup>
            <Col smOffset={6} sm={10}>
                {props.title}
            </Col>
            <Col smOffset={2} sm={10}>
                <FormControl
                    id={props.id}
                    type="checkbox"
                    checked={props.value}
                    value={props.value}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                />
            </Col>
        </FormGroup>
    );
}

export default CheckBox;