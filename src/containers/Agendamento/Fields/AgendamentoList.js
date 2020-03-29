import React from 'react'
import { format } from 'date-fns'
import { Glyphicon, Button } from 'react-bootstrap'
import Tabela from '../../../components/Tabelas'
import ClinicClient from '../../../services/Clinic/ClinicClient'

function AgendamentoList(props) {

    async function handlCancelClick(scheduleId) {
        try {
            await ClinicClient.delete(`/appointments/${scheduleId}`)
            window.flash(`Agendamento Cancelado`, 'success');
            setTimeout(() => {
                window.location.href = '/agendamentoList';
            }, 2000);
        } catch (e) {
            console.dir(e)
            window.flash(
                `Erro: ${e.response.data.errors}`,
                'error'
            )
        }

    }
    function tableHead() {
        return (
            <>
                <th>Medico</th>
                <th>Pasciente</th>
                <th>Data</th>
                <th>Hora</th>
                <th>Cancelar</th>
            </>
        );
    }

    function tableBody(schedule) {
        return (
            <tr>
                <td>{schedule.doctor.name}</td>
                <td>{schedule.patient.name}</td>
                <td>{format(new Date(schedule.date), 'dd/MM/yyyy')}</td>
                <td>
                    {format(new Date(schedule.date), 'HH:mm')}
                </td>
                <td>
                    {schedule.cancelable && (
                        <Button bsStyle="danger" onClick={() => handlCancelClick(schedule.id)}>
                            <Glyphicon glyph='glyphicon glyphicon-trash' />
                        </Button>
                    )}
                </td>



            </tr>
        );
    }
    return (
        <>
            <Tabela
                head={tableHead()}
                body={props.schedules.map(sc => tableBody(sc))}
            />
        </>
    );
}

export default AgendamentoList;