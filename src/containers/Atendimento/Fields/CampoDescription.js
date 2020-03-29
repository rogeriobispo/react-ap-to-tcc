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
            <Col componentClass={ControlLabel} sm={1}>
                Descrição
            </Col>
            <Col sm={10}>
                <TextArea
                    id="descricao"
                    placeholder="Descrição"
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