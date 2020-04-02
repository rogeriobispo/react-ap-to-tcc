import React, { useState, useEffect } from 'react';
import { Col, ControlLabel, Button, FormGroup } from 'react-bootstrap'
import Select from '../../../components/form/Select'
import TextField from '../../../components/form/TextField'
import ClinicClient from '../../../services/Clinic/ClinicClient'

function CampoMedicametos(props) {

    const [medicametos, setMedicamentos] = useState([])
    const [dose, setDose] = useState('')
    const [medicamento, setMedicamento] = useState('')


    useEffect(() => {
        (async () => {
            const medicamentos = await ClinicClient.get('/medicines')
            setMedicamentos(medicamentos.data)
        })()

    }, [])

    function handleDose(e) {
        setDose(e.target.value)
    }
    function handleMedicamento(e) {
        const medicamentoNome = e.target.options[e.target.selectedIndex].text
        setMedicamento({ id: e.target.value, name: medicamentoNome })
    }
    function addMedicine() {
        const jaCadastrado = props.medicamentos.filter(m => m.id === medicamento.id)
        if (jaCadastrado.length === 0) {
            props.setMedicamentos({ ...medicamento, dose, })
        } else {
            window.flash('Medicamento ja na receita', 'error');
        }
    }
    function medicametosOptions() {
        const options = [
            <option key={-1} value={-1}>
                Selecione
            </option>
        ]

        medicametos.map((medi) => {
            options.push(
                <option key={medi.id} value={medi.id}>
                    {medi.name}
                    {' '}
                    -
                    {' '}
                    {medi.factory}
                </option>)
            return true
        })

        return options
    }

    return (
        <FormGroup>
            <Col componentClass={ControlLabel} sm={1}>
                Medicamentos
            </Col>
            <Col sm={4}>
                <Select
                    id='medicamentos'
                    onChange={(e) => { props.onChange(e); handleMedicamento(e) }}
                    value={props.value}
                    errors={props.errors}
                    touched={props.touched}
                    items={medicametosOptions()}
                />
            </Col>
            <Col sm={7}>
                <Col componentClass={ControlLabel} sm={1}>
                    Dose:
                </Col>
                <Col sm={8}>
                    <TextField
                        id="nome"
                        placeholder="dose"
                        type="text"
                        value={props.value}
                        onChange={(e) => { props.onChange(e); handleDose(e) }}
                        onBlur={props.onBlur}
                        errors={props.errors}
                        touched={props.touched}
                    />
                </Col>
                <Col sm={1}>
                    <Button bsStyle="primary" onClick={() => addMedicine()}>Adicionar</Button>
                </Col>
            </Col>

        </FormGroup>
    );
}


export default CampoMedicametos;