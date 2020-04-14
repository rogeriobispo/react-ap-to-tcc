import React, { useState, useEffect } from 'react';
import { Breadcrumb } from 'react-bootstrap'
import { format } from 'date-fns'
import AtendimentoList from '../Fields/AtendimentoList'
import ClinicClient from '../../../services/Clinic/ClinicClient'
import { user } from '../../../services/authentication/auth'
import './list.css'


function ListAtendimento() {

  const [schedule, setSchedule] = useState([])


  useEffect(() => {
    (async () => {
      const date = format(new Date(), 'yyyy-MM-dd')
      const response = await ClinicClient.get(`/doctors/${user().id}/appointments?date=${date}T00:00:00-0300&finished=false`)
      setSchedule(response.data)

    })()
  }, [setSchedule])
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          Atendimento
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Iniciar</Breadcrumb.Item>
      </Breadcrumb>
      <AtendimentoList
        schedules={schedule}
      />

    </>
  );
}

export default ListAtendimento;

