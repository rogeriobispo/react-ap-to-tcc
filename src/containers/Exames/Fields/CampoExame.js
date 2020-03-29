import React, { useState } from 'react';
import { Col, ControlLabel, Button, FormGroup } from 'react-bootstrap'
import TextField from '../../../components/form/TextField'


function CampoExame(props) {


    const [exame, setExame] = useState('')


    function handleExame(e) {
        setExame(e.target.value)
    }

    // eslint-disable-next-line consistent-return
    function addExame() {
        if (exame.length < 4) return null
        if (!props.exames.includes(exame)) {
            props.setExames(exame)
        } else {
            window.flash('Exame já solicitado', 'error')
        }
    }


    return (
        <FormGroup>

            <Col componentClass={ControlLabel} sm={1}>
                Exame:
            </Col>
            <Col sm={8}>
                <TextField
                    id="nome"
                    placeholder="Exame"
                    type="text"
                    value={props.value}
                    onChange={(e) => { props.onChange(e); handleExame(e) }}
                    onBlur={props.onBlur}
                    errors={props.errors}
                    touched={props.touched}
                />
            </Col>
            <Col sm={1}>
                <Button bsStyle="primary" onClick={() => addExame()}>Adicionar</Button>
            </Col>


        </FormGroup>
    );
}


export default CampoExame;