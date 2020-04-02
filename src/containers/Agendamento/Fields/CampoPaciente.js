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
        ]

        pascients.map((paciente) => {
            options.push(
                { id: paciente.id, value: paciente.id, label: `${paciente.name} - ${paciente.document}` }
            )
            return true
        })

        return options
    }

    return (
        <>
            <Select
                name='paciente'
                id='paciente'
                onChange={props.onChange}
                handleChange={props.handleChange}
                value={props.value}
                errors={props.errors}
                touched={props.touched}
                items={pacientesOptions()}

            />
        </>
    );
}

export default CampoPaciente;