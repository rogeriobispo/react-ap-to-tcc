import React, { useState, useEffect } from 'react';
import Select from '../../../components/form/Select'
import ClinicClient from '../../../services/Clinic/ClinicClient'

function CampoMedico(props) {

    const [doctors, setDoctors] = useState([])


    useEffect(() => {
        (async () => {
            const medicos = await ClinicClient.get('/doctors')
            setDoctors(medicos.data)
        })()

    }, [])


    function doctorsOptions() {
        const options = [
            <option key={-1} value={-1}>
                Selecione
            </option>
        ]

        doctors.map((doctor) => {
            options.push(
                <option key={doctor.id} value={doctor.id}>
                    {doctor.name.split(' ')[0]}
                    {' '}
                    -
              {' '}
                    {doctor.specialty.name}
                </option>)
            return true
        })

        return options
    }

    return (
        <>
            <Select
                id='doctor'
                onChange={props.onChange}
                value={props.value}
                errors={props.errors}
                touched={props.touched}
                items={doctorsOptions()}
            />
        </>
    );
}

export default CampoMedico;