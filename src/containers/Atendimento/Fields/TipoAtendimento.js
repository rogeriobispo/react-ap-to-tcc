import React from 'react';
import {
    Radio,
    Col,
    ControlLabel,
    FormGroup
} from 'react-bootstrap'
import Errors from '../../../components/form/Errors'

function TipoAtendimento(props) {
    return (
        <FormGroup>
            <Col componentClass={ControlLabel} sm={1}>
                Tipo
            </Col>
            <Col sm={3}>
                <Radio
                    id="tipo"
                    name="tipo"
                    value="atendimento"
                    onChange={() => props.setFieldValue('tipo', 'atendimento')}
                    inline
                >
                    Atendimento
                </Radio>

                <Radio
                    name="tipo"
                    value="retorno"
                    onChange={() => props.setFieldValue('tipo', 'retorno')}
                    inline
                >
                    Retorno
                </Radio>

                <Errors id="tipo" errors={props.errors} touched={props.touched} />
            </Col>
            <Col sm={12} />

        </FormGroup>
    );
}

export default TipoAtendimento;