import React, { useState } from 'react';

import { Jumbotron, Breadcrumb } from 'react-bootstrap'

import clinicClient from '../../../services/Clinic/ClinicClient'

import { user } from '../../../services/authentication/auth'

import Agenda from '../Fields/agenda'

function Index() {

    const [buttonState, setButtonState] = useState([
        { id: null, dia: 'segunda', hora: "08:00", isActive: false }, // 0
        { id: null, dia: 'segunda', hora: "08:30", isActive: false }, // 1
        { id: null, dia: 'segunda', hora: "09:00", isActive: false }, // 2
        { id: null, dia: 'segunda', hora: "09:30", isActive: false }, // 3
        { id: null, dia: 'segunda', hora: "10:00", isActive: false }, // 4
        { id: null, dia: 'segunda', hora: "10:30", isActive: false }, // 5
        { id: null, dia: 'segunda', hora: "11:00", isActive: false }, // 6
        { id: null, dia: 'segunda', hora: "11:30", isActive: false }, // 7
        { id: null, dia: 'segunda', hora: "12:00", isActive: false }, // 8
        { id: null, dia: 'segunda', hora: "12:30", isActive: false }, // 9
        { id: null, dia: 'segunda', hora: "13:00", isActive: false }, // 10
        { id: null, dia: 'segunda', hora: "13:30", isActive: false }, // 11
        { id: null, dia: 'segunda', hora: "14:00", isActive: false }, // 12
        { id: null, dia: 'segunda', hora: "14:30", isActive: false }, // 13
        { id: null, dia: 'segunda', hora: "15:00", isActive: false }, // 14
        { id: null, dia: 'segunda', hora: "15:30", isActive: false }, // 15
        { id: null, dia: 'segunda', hora: "16:00", isActive: false }, // 16
        { id: null, dia: 'segunda', hora: "16:30", isActive: false }, // 17
        { id: null, dia: 'segunda', hora: "17:00", isActive: false }, // 18
        { id: null, dia: 'segunda', hora: "17:30", isActive: false }, // 19

        { id: null, dia: 'terça', hora: "08:00", isActive: false }, // 20
        { id: null, dia: 'terça', hora: "08:30", isActive: false }, // 21
        { id: null, dia: 'terça', hora: "09:00", isActive: false }, // 22
        { id: null, dia: 'terça', hora: "09:30", isActive: false }, // 23
        { id: null, dia: 'terça', hora: "10:00", isActive: false }, // 24
        { id: null, dia: 'terça', hora: "10:30", isActive: false }, // 25
        { id: null, dia: 'terça', hora: "11:00", isActive: false }, // 26
        { id: null, dia: 'terça', hora: "11:30", isActive: false }, // 27
        { id: null, dia: 'terça', hora: "12:00", isActive: false }, // 28
        { id: null, dia: 'terça', hora: "12:30", isActive: false }, // 29
        { id: null, dia: 'terça', hora: "13:00", isActive: false }, // 30
        { id: null, dia: 'terça', hora: "13:30", isActive: false }, // 31
        { id: null, dia: 'terça', hora: "14:00", isActive: false }, // 32
        { id: null, dia: 'terça', hora: "14:30", isActive: false }, // 33
        { id: null, dia: 'terça', hora: "15:00", isActive: false }, // 34
        { id: null, dia: 'terça', hora: "15:30", isActive: false }, // 35
        { id: null, dia: 'terça', hora: "16:00", isActive: false }, // 36
        { id: null, dia: 'terça', hora: "16:30", isActive: false }, // 37
        { id: null, dia: 'terça', hora: "17:00", isActive: false }, // 38
        { id: null, dia: 'terça', hora: "17:30", isActive: false }, // 39

        { id: null, dia: 'quarta', hora: "08:00", isActive: false }, // 40
        { id: null, dia: 'quarta', hora: "08:30", isActive: false }, // 41
        { id: null, dia: 'quarta', hora: "09:00", isActive: false }, // 42
        { id: null, dia: 'quarta', hora: "09:30", isActive: false }, // 43
        { id: null, dia: 'quarta', hora: "10:00", isActive: false }, // 44
        { id: null, dia: 'quarta', hora: "10:30", isActive: false }, // 45
        { id: null, dia: 'quarta', hora: "11:00", isActive: false }, // 46
        { id: null, dia: 'quarta', hora: "11:30", isActive: false }, // 47
        { id: null, dia: 'quarta', hora: "12:00", isActive: false }, // 48
        { id: null, dia: 'quarta', hora: "12:30", isActive: false }, // 49
        { id: null, dia: 'quarta', hora: "13:00", isActive: false }, // 50
        { id: null, dia: 'quarta', hora: "13:30", isActive: false }, // 51
        { id: null, dia: 'quarta', hora: "14:00", isActive: false }, // 52
        { id: null, dia: 'quarta', hora: "14:30", isActive: false }, // 53
        { id: null, dia: 'quarta', hora: "15:00", isActive: false }, // 54
        { id: null, dia: 'quarta', hora: "15:30", isActive: false }, // 55
        { id: null, dia: 'quarta', hora: "16:00", isActive: false }, // 56
        { id: null, dia: 'quarta', hora: "16:30", isActive: false }, // 57
        { id: null, dia: 'quarta', hora: "17:00", isActive: false }, // 58
        { id: null, dia: 'quarta', hora: "17:30", isActive: false }, // 59

        { id: null, dia: 'quinta', hora: "08:00", isActive: false }, // 60
        { id: null, dia: 'quinta', hora: "08:30", isActive: false }, // 61
        { id: null, dia: 'quinta', hora: "09:00", isActive: false }, // 62
        { id: null, dia: 'quinta', hora: "09:30", isActive: false }, // 63
        { id: null, dia: 'quinta', hora: "10:00", isActive: false }, // 64
        { id: null, dia: 'quinta', hora: "10:30", isActive: false }, // 65
        { id: null, dia: 'quinta', hora: "11:00", isActive: false }, // 66
        { id: null, dia: 'quinta', hora: "11:30", isActive: false }, // 67
        { id: null, dia: 'quinta', hora: "12:00", isActive: false }, // 68
        { id: null, dia: 'quinta', hora: "12:30", isActive: false }, // 69
        { id: null, dia: 'quinta', hora: "13:00", isActive: false }, // 70
        { id: null, dia: 'quinta', hora: "13:30", isActive: false }, // 71
        { id: null, dia: 'quinta', hora: "14:00", isActive: false }, // 72
        { id: null, dia: 'quinta', hora: "14:30", isActive: false }, // 73
        { id: null, dia: 'quinta', hora: "15:00", isActive: false }, // 74
        { id: null, dia: 'quinta', hora: "15:30", isActive: false }, // 75
        { id: null, dia: 'quinta', hora: "16:00", isActive: false }, // 76
        { id: null, dia: 'quinta', hora: "16:30", isActive: false }, // 77
        { id: null, dia: 'quinta', hora: "17:00", isActive: false }, // 78
        { id: null, dia: 'quinta', hora: "17:30", isActive: false }, // 79


        { id: null, dia: 'sexta', hora: "08:00", isActive: false }, // 80
        { id: null, dia: 'sexta', hora: "08:30", isActive: false }, // 81
        { id: null, dia: 'sexta', hora: "09:00", isActive: false }, // 82
        { id: null, dia: 'sexta', hora: "09:30", isActive: false }, // 83
        { id: null, dia: 'sexta', hora: "10:00", isActive: false }, // 84
        { id: null, dia: 'sexta', hora: "10:30", isActive: false }, // 85
        { id: null, dia: 'sexta', hora: "11:00", isActive: false }, // 86
        { id: null, dia: 'sexta', hora: "11:30", isActive: false }, // 87
        { id: null, dia: 'sexta', hora: "12:00", isActive: false }, // 88
        { id: null, dia: 'sexta', hora: "12:30", isActive: false }, // 89
        { id: null, dia: 'sexta', hora: "13:00", isActive: false }, // 90
        { id: null, dia: 'sexta', hora: "13:30", isActive: false }, // 91
        { id: null, dia: 'sexta', hora: "14:00", isActive: false }, // 92
        { id: null, dia: 'sexta', hora: "14:30", isActive: false }, // 93
        { id: null, dia: 'sexta', hora: "15:00", isActive: false }, // 94
        { id: null, dia: 'sexta', hora: "15:30", isActive: false }, // 95
        { id: null, dia: 'sexta', hora: "16:00", isActive: false }, // 96
        { id: null, dia: 'sexta', hora: "16:30", isActive: false }, // 97
        { id: null, dia: 'sexta', hora: "17:00", isActive: false }, // 98
        { id: null, dia: 'sexta', hora: "17:30", isActive: false }, // 99

    ])



    function foundStateIndex(schedule) {
        const days = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sabado']
        for (let index = 0; index < buttonState.length; index++) {
            const { dia } = buttonState[index]
            const { hora } = buttonState[index]
            if (dia === days[schedule.day] && hora === schedule.schedule_time)
                return index

        }
        return null
    }

    (async function changeState() {
        const response = await clinicClient.get(`/doctors/${user().id}/schedules`)
        const schedules = response.data

        schedules.map(async (schedule) => {
            const index = foundStateIndex(schedule)
            if (index !== null) {
                buttonState[index].isActive = true
                buttonState[index].id = schedule.id
            }
        });
        setButtonState([...buttonState])

    })()

    async function handleClick(e, index) {
        e.preventDefault();
        try {
            await clinicClient.delete(`/schedule/${buttonState[index].id}`)
            buttonState[index].isActive = false
            await setButtonState([...buttonState])

        } catch (error) {
            window.flash(
                `Erro: Não foi possivel deletar agendamento`,
                'error'
            );
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
                <small>* Para remover agendamento click no botão azul</small>
                <Agenda buttonState={buttonState} setButtonState={setButtonState} handleClick={handleClick} list />
            </Jumbotron>
        </>
    );
}

export default Index;