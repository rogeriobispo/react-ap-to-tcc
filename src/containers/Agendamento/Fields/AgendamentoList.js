import React from 'react';
import { format } from 'date-fns';
import Tabela from '../../../components/Tabelas';

function AgendamentoList(props) {
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
        console.log(schedule.date)
        return (
            <tr>
                <td>{schedule.doctor.name}</td>
                <td>{schedule.patient.name}</td>
                <td>{format(new Date(schedule.date), 'dd/MM/yyyy')}</td>
                <td>
                    {format(new Date(schedule.date), 'HH:mm')}
                </td>
                <td>Cancelar</td>

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