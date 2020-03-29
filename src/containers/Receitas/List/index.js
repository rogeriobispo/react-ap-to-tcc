import React, { useState, useEffect } from 'react';
import { format } from 'date-fns'
import ReceitaList from '../Fields/receitaList'
import ClinicClient from '../../../services/Clinic/ClinicClient'
import { user } from '../../../services/authentication/auth'
import './list.css'


function ListAtendimento() {

  const [schedule, setSchedule] = useState([])

  useEffect(() => {
    (async () => {
      const date = format(new Date(), 'yyyy-MM-dd')
      const response = await ClinicClient.get(`/doctors/${user().id}/appointments?date=${date}T00:00:00-0300&status=true&prescription=true`)

      setSchedule(response.data)
    })()
  }, [])
  return (
    <>
      <ReceitaList
        schedules={schedule}
      />

    </>
  );
}

export default ListAtendimento;

