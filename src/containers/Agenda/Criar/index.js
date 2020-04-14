import React, { useState, useEffect } from 'react';
import { Jumbotron, Button, Breadcrumb } from 'react-bootstrap'
import { user } from '../../../services/authentication/auth'
import clinicClient from '../../../services/Clinic/ClinicClient'
import Agenda from '../Fields/agenda'

function Index() {

  const [buttonState, setButtonState] = useState([
    { dia: 'segunda', hora: "08:00", isActive: false }, // 0
    { dia: 'segunda', hora: "08:30", isActive: false }, // 1
    { dia: 'segunda', hora: "09:00", isActive: false }, // 2
    { dia: 'segunda', hora: "09:30", isActive: false }, // 3
    { dia: 'segunda', hora: "10:00", isActive: false }, // 4
    { dia: 'segunda', hora: "10:30", isActive: false }, // 5
    { dia: 'segunda', hora: "11:00", isActive: false }, // 6
    { dia: 'segunda', hora: "11:30", isActive: false }, // 7
    { dia: 'segunda', hora: "12:00", isActive: false }, // 8
    { dia: 'segunda', hora: "12:30", isActive: false }, // 9
    { dia: 'segunda', hora: "13:00", isActive: false }, // 10
    { dia: 'segunda', hora: "13:30", isActive: false }, // 11
    { dia: 'segunda', hora: "14:00", isActive: false }, // 12
    { dia: 'segunda', hora: "14:30", isActive: false }, // 13
    { dia: 'segunda', hora: "15:00", isActive: false }, // 14
    { dia: 'segunda', hora: "15:30", isActive: false }, // 15
    { dia: 'segunda', hora: "16:00", isActive: false }, // 16
    { dia: 'segunda', hora: "16:30", isActive: false }, // 17
    { dia: 'segunda', hora: "17:00", isActive: false }, // 18
    { dia: 'segunda', hora: "17:30", isActive: false }, // 19

    { dia: 'terça', hora: "08:00", isActive: false }, // 20
    { dia: 'terça', hora: "08:30", isActive: false }, // 21
    { dia: 'terça', hora: "09:00", isActive: false }, // 22
    { dia: 'terça', hora: "09:30", isActive: false }, // 23
    { dia: 'terça', hora: "10:00", isActive: false }, // 24
    { dia: 'terça', hora: "10:30", isActive: false }, // 25
    { dia: 'terça', hora: "11:00", isActive: false }, // 26
    { dia: 'terça', hora: "11:30", isActive: false }, // 27
    { dia: 'terça', hora: "12:00", isActive: false }, // 28
    { dia: 'terça', hora: "12:30", isActive: false }, // 29
    { dia: 'terça', hora: "13:00", isActive: false }, // 30
    { dia: 'terça', hora: "13:30", isActive: false }, // 31
    { dia: 'terça', hora: "14:00", isActive: false }, // 32
    { dia: 'terça', hora: "14:30", isActive: false }, // 33
    { dia: 'terça', hora: "15:00", isActive: false }, // 34
    { dia: 'terça', hora: "15:30", isActive: false }, // 35
    { dia: 'terça', hora: "16:00", isActive: false }, // 36
    { dia: 'terça', hora: "16:30", isActive: false }, // 37
    { dia: 'terça', hora: "17:00", isActive: false }, // 38
    { dia: 'terça', hora: "17:30", isActive: false }, // 39

    { dia: 'quarta', hora: "08:00", isActive: false }, // 40
    { dia: 'quarta', hora: "08:30", isActive: false }, // 41
    { dia: 'quarta', hora: "09:00", isActive: false }, // 42
    { dia: 'quarta', hora: "09:30", isActive: false }, // 43
    { dia: 'quarta', hora: "10:00", isActive: false }, // 44
    { dia: 'quarta', hora: "10:30", isActive: false }, // 45
    { dia: 'quarta', hora: "11:00", isActive: false }, // 46
    { dia: 'quarta', hora: "11:30", isActive: false }, // 47
    { dia: 'quarta', hora: "12:00", isActive: false }, // 48
    { dia: 'quarta', hora: "12:30", isActive: false }, // 49
    { dia: 'quarta', hora: "13:00", isActive: false }, // 50
    { dia: 'quarta', hora: "13:30", isActive: false }, // 51
    { dia: 'quarta', hora: "14:00", isActive: false }, // 52
    { dia: 'quarta', hora: "14:30", isActive: false }, // 53
    { dia: 'quarta', hora: "15:00", isActive: false }, // 54
    { dia: 'quarta', hora: "15:30", isActive: false }, // 55
    { dia: 'quarta', hora: "16:00", isActive: false }, // 56
    { dia: 'quarta', hora: "16:30", isActive: false }, // 57
    { dia: 'quarta', hora: "17:00", isActive: false }, // 58
    { dia: 'quarta', hora: "17:30", isActive: false }, // 59

    { dia: 'quinta', hora: "08:00", isActive: false }, // 60
    { dia: 'quinta', hora: "08:30", isActive: false }, // 61
    { dia: 'quinta', hora: "09:00", isActive: false }, // 62
    { dia: 'quinta', hora: "09:30", isActive: false }, // 63
    { dia: 'quinta', hora: "10:00", isActive: false }, // 64
    { dia: 'quinta', hora: "10:30", isActive: false }, // 65
    { dia: 'quinta', hora: "11:00", isActive: false }, // 66
    { dia: 'quinta', hora: "11:30", isActive: false }, // 67
    { dia: 'quinta', hora: "12:00", isActive: false }, // 68
    { dia: 'quinta', hora: "12:30", isActive: false }, // 69
    { dia: 'quinta', hora: "13:00", isActive: false }, // 70
    { dia: 'quinta', hora: "13:30", isActive: false }, // 71
    { dia: 'quinta', hora: "14:00", isActive: false }, // 72
    { dia: 'quinta', hora: "14:30", isActive: false }, // 73
    { dia: 'quinta', hora: "15:00", isActive: false }, // 74
    { dia: 'quinta', hora: "15:30", isActive: false }, // 75
    { dia: 'quinta', hora: "16:00", isActive: false }, // 76
    { dia: 'quinta', hora: "16:30", isActive: false }, // 77
    { dia: 'quinta', hora: "17:00", isActive: false }, // 78
    { dia: 'quinta', hora: "17:30", isActive: false }, // 79


    { dia: 'sexta', hora: "08:00", isActive: false }, // 80
    { dia: 'sexta', hora: "08:30", isActive: false }, // 81
    { dia: 'sexta', hora: "09:00", isActive: false }, // 82
    { dia: 'sexta', hora: "09:30", isActive: false }, // 83
    { dia: 'sexta', hora: "10:00", isActive: false }, // 84
    { dia: 'sexta', hora: "10:30", isActive: false }, // 85
    { dia: 'sexta', hora: "11:00", isActive: false }, // 86
    { dia: 'sexta', hora: "11:30", isActive: false }, // 87
    { dia: 'sexta', hora: "12:00", isActive: false }, // 88
    { dia: 'sexta', hora: "12:30", isActive: false }, // 89
    { dia: 'sexta', hora: "13:00", isActive: false }, // 90
    { dia: 'sexta', hora: "13:30", isActive: false }, // 91
    { dia: 'sexta', hora: "14:00", isActive: false }, // 92
    { dia: 'sexta', hora: "14:30", isActive: false }, // 93
    { dia: 'sexta', hora: "15:00", isActive: false }, // 94
    { dia: 'sexta', hora: "15:30", isActive: false }, // 95
    { dia: 'sexta', hora: "16:00", isActive: false }, // 96
    { dia: 'sexta', hora: "16:30", isActive: false }, // 97
    { dia: 'sexta', hora: "17:00", isActive: false }, // 98
    { dia: 'sexta', hora: "17:30", isActive: false }, // 99

  ])

  const [canSave, setCanSave] = useState(true)
  useEffect(() => {
    const hasSchedule = buttonState.filter((value) => value.isActive === true)
    if (hasSchedule.length >= 1)
      setCanSave(false)
    else
      setCanSave(true)

  }, [buttonState]);

  function payload(schedule) {
    const days = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado']
    return {
      doctor_id: user().id,
      day: days.indexOf(schedule.dia),
      schedule_time: schedule.hora

    }
  }

  async function handleClick(e, index) {
    e.preventDefault();
    buttonState[index].isActive = !buttonState[index].isActive
    await setButtonState([...buttonState])
  }

  function handleSaveButton() {
    try {
      const scheduleToSave = buttonState.filter((value) => value.isActive === true)
      scheduleToSave.map((schedule) => {
        clinicClient.post('/schedule', payload(schedule))
        return ''
      })

      window.flash(`Agenda criada com sucesso`, 'success');
      setTimeout(() => {
        window.location.href = '/agendaList';
      }, 2000);
    } catch (error) {
      window.flash(`Não foi possivel criar agenda`, 'success');
    }
  }
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          Agenda
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Criar</Breadcrumb.Item>
      </Breadcrumb>
      <Jumbotron>
        <Button bsStyle="primary" bsSize="large" disabled={canSave} onClick={handleSaveButton}>Savlar</Button>
        <Agenda buttonState={buttonState} setButtonState={setButtonState} handleClick={handleClick} />
      </Jumbotron>
    </>
  );
}

export default Index;