import React, { useState, useEffect } from 'react';
import Select from '../../../components/form/Select'
import ClinicClient from '../../../services/Clinic/ClinicClient'

function CampoPasciente(props) {

    const [pascients, setPascients] = useState([])


    useEffect(() => {
        (async () => {
            const pascientes = await ClinicClient.get('/patients')
            setPascients(pascientes.data)
        })()

    }, [])


    function pascientesOptions() {
        const options = [
            <option key={-1} value={-1}>
                Selecione
            </option>
        ]

        pascients.map((pasciente) => {
            options.push(
                <option key={pasciente.id} value={pasciente.id}>
                    {pasciente.name}
                </option>)
            return true
        })

        return options
    }

    return (
        <>
            <Select
                id='pasciente'
                onChange={props.onChange}
                value={props.value}
                errors={props.errors}
                touched={props.touched}
                items={pascientesOptions()}
            />
        </>
    );
}

export default CampoPasciente;