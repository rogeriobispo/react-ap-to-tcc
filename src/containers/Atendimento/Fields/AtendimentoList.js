import React from 'react'
import { format } from 'date-fns'
import { Glyphicon } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Tabela from '../../../components/Tabelas'

function AtendimentoList(props) {
    function tableHead() {
        return (
            <>
                <th>Medico</th>
                <th>Paciente</th>
                <th>Data</th>
                <th>Hora</th>
                <th>Iniciar</th>
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
                    <Link to={`/atendimento/${schedule.id}`} className="btn btn-success active">
                        <Glyphicon glyph='glyphicon glyphicon-play' />
                    </Link>
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

export default AtendimentoList;