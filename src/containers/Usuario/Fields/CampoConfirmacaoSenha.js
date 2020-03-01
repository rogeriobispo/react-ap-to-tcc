import React from 'react';
import {
    FormGroup,
    Col,
    ControlLabel,
} from 'react-bootstrap';

import TextField from '../../../components/form/TextField'

function CampoConfirmacaoSenha(props) {
    return (
        <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
                Confirmação Senha
            </Col>
            <Col sm={10}>
                <TextField
                    id="confirmPassword"
                    placeholder="Confirmar senha"
                    type="password"
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

export default CampoConfirmacaoSenha