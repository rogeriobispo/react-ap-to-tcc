import React from 'react'
import { format } from 'date-fns'
import { Glyphicon } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Tabela from '../../../components/Tabelas'

function ReceitaList(props) {
    function tableHead() {
        return (
            <>
                <th>Medico</th>
                <th>Pasciente</th>
                <th>Data</th>
                <th>Hora</th>
                <th>Receita</th>
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
                    <Link to={`/atendimento/${schedule.id}/receita`} className="btn btn-success active">
                        <Glyphicon glyph='glyphicon glyphicon-print' />
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

export default ReceitaList;