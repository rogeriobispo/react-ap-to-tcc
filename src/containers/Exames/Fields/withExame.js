import React from 'react';
import {
    Radio,
    Col,
    ControlLabel,
    FormGroup
} from 'react-bootstrap'
import Errors from '../../../components/form/Errors'

function WithExame(props) {
    return (
        <FormGroup>
            <Col componentClass={ControlLabel} sm={1}>
                Manter Com:
            </Col>
            <Col sm={3}>
                <Radio
                    id="with"
                    name="with"
                    value="medico"
                    onChange={() => props.setFieldValue('with', 'medico')}
                    inline
                >
                    Médico
                </Radio>

                <Radio
                    name="with"
                    value="retorno"
                    onChange={() => props.setFieldValue('with', 'Paciente')}
                    inline
                >
                    Paciente
                </Radio>

                <Errors id="with" errors={props.errors} touched={props.touched} />
            </Col>
            <Col sm={12} />
        </FormGroup>
    );
}

export default WithExame;