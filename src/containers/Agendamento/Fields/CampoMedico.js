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
        const options = []

        doctors.map((doctor) => {
            options.push(
                { id: doctor.id, value: doctor.id, label: `${doctor.name} - ${doctor.crm}` }
            )
            return true
        })

        return options
    }

    return (
        <>
            <Select
                name='doctor'
                id='doctor'
                onChange={props.onChange}
                handleChange={props.handleChange}
                value={props.value}
                errors={props.errors}
                touched={props.touched}
                items={doctorsOptions()}
            />
        </>
    );
}


export default CampoMedico;