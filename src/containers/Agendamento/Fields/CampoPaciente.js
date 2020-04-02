import React, { useState, useEffect } from 'react';
import Select from '../../../components/form/Select'
import ClinicClient from '../../../services/Clinic/ClinicClient'

function CampoPaciente(props) {

    const [pascients, setPascients] = useState([])


    useEffect(() => {
        (async () => {
            const pacientes = await ClinicClient.get('/patients')
            setPascients(pacientes.data)
        })()

    }, [])


    function pacientesOptions() {
        const options = [
            <option key={-1} value={-1}>
                Selecione
            </option>
        ]

        pascients.map((paciente) => {
            options.push(
                <option key={paciente.id} value={paciente.id}>
                    {paciente.name}
                </option>)
            return true
        })

        return options
    }

    return (
        <>
            <Select
                id='paciente'
                onChange={props.onChange}
                value={props.value}
                errors={props.errors}
                touched={props.touched}
                items={pacientesOptions()}
            />
        </>
    );
}

export default CampoPaciente;