import React, { useState, useEffect } from 'react';
import { Col, ControlLabel, Button, FormGroup } from 'react-bootstrap'
import Select from '../../../components/form/Select'
import TextField from '../../../components/form/TextField'
import ClinicClient from '../../../services/Clinic/ClinicClient'

function CampoMedicamentos(props) {

    const [medicamentos, setMedicamentos] = useState([])
    const [dose, setDose] = useState('')
    const [medicamento, setMedicamento] = useState('')


    useEffect(() => {
        (async () => {
            const response = await ClinicClient.get('/medicines')
            setMedicamentos(response.data)
        })()

    }, [])

    function handleDose(e) {
        setDose(e.target.value)
    }
    function handleMedicamento(medicaId) {
        const medicmt = medicamentos.filter(m => Number(m.id) === Number(medicaId))
        setMedicamento({ id: medicaId, name: medicmt[0].name, factory: medicmt[0].factory })

    }
    function addMedicine() {
        const jaCadastrado = props.medicamentos.filter(m => m.id === medicamento.id)
        if (jaCadastrado.length === 0) {
            props.setMedicamentos({ ...medicamento, dose, })
        } else {
            window.flash('Medicamento ja na receita', 'error');
        }
    }
    function medicamentosOptions() {
        const options = []

        medicamentos.map((medi) => {
            options.push(
                { id: medi.id, value: medi.id, label: `${medi.name} - ${medi.factory}` }
            )
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
                    name='medicamentos'
                    id='medicamentos'
                    onChange={(e) => { props.sonChange(e); handleMedicamento(e) }}
                    handleChange={(e) => { props.sonChange(e); handleMedicamento(e) }}
                    value={props.svalue}
                    errors={props.serrors}
                    touched={props.stouched}
                    items={medicamentosOptions()}
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


export default CampoMedicamentos;