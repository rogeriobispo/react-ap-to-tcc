import React from 'react'
import { format } from 'date-fns'
import { Glyphicon } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Tabela from '../../../components/Tabelas'

function ExameList(props) {
    function tableHead() {
        return (
            <>
                <th>Medico</th>
                <th>Paciente</th>
                <th>Data</th>
                <th>Hora</th>
                <th>Exame</th>
                <th>Guia</th>
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
                    <Link to={{ pathname: `/atendimento/${schedule.id}/exame`, state: { schedule } }} className="btn btn-success active">
                        <Glyphicon glyph='glyphicon glyphicon-heart-empty' />
                    </Link>
                </td>
                <td>
                    {schedule.exam && (
                        <Link to={`/atendimento/${schedule.id}/guia`} className="btn btn-success active">
                            <Glyphicon glyph='glyphicon glyphicon-print' />
                        </Link>
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

export default ExameList;