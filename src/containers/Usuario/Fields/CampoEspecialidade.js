import React from 'react';
import {
    Col,
    ControlLabel,
} from 'react-bootstrap';

import Select from '../../../components/form/Select/withouSearch'

function CampoCrm(props) {
    return (
        <>
            <Col componentClass={ControlLabel} sm={2}>
                Especialidade
            </Col>
            <Col sm={4}>
                <Select
                    id="especialty_id"
                    onChange={props.onChange}
                    value={props.value}
                    items={props.items}
                    errors={props.errors}
                    touched={props.touched}
                />
            </Col>
        </>
    );
}

export default CampoCrm
