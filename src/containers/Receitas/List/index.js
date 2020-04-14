import React, { useState, useEffect } from 'react';
import { Breadcrumb } from 'react-bootstrap'
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
      const response = await ClinicClient.get(`/doctors/${user().id}/appointments?date=${date}T00:00:00-0300&finished=true&prescription=true`)

      setSchedule(response.data)
    })()
  }, [])
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="/Home">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="">
          Atendimento
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Receita</Breadcrumb.Item>
      </Breadcrumb>
      <ReceitaList
        schedules={schedule}
      />

    </>
  );
}

export default ListAtendimento;

