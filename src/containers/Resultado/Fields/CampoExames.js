import React, { useState, useEffect } from 'react';
import { FormGroup, Col, ControlLabel } from 'react-bootstrap'
import ClinicClient from '../../../services/Clinic/ClinicClient'
import Select from '../../../components/form/Select'

function Idade(props) {
    const [exames, setExames] = useState([])
    useEffect(() => {

        (async () => {
            const response = await ClinicClient.get(`/appointments/${props.apiId}/exams?finished=false`)
            setExames(response.data)
        })()

    }, [props.apiId])

    const ex = []

    exames.map((exam) => {
        ex.push(
            { id: exam.id, value: exam.id, label: exam.name }
        )
        return true
    })

    return (
        <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>
                Exames
            </Col>
            <Col sm={2}>
                <Select
                    id='exame'
                    onChange={props.onChange}
                    handleChange={props.handleChange}
                    value={props.value}
                    errors={props.errors}
                    touched={props.touched}
                    items={ex}
                />
            </Col>
        </FormGroup>
    )

}

export default Idade;