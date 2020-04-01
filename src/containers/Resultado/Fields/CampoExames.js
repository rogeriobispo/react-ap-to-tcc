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

    const ex = [
        <option key={-1} value={-1}>
            Selecione
        </option>
    ]

    exames.map((exam) => {
        ex.push(
            <option key={exam.id} value={exam.id}>
                {exam.name}
            </option>
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